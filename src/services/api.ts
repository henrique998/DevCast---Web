import axios, { AxiosError } from "axios"
import { parseCookies, setCookie } from "nookies"
import { signOut } from "../contexts/AuthContext"
import { AuthTokenError } from "./errors/AuthTokenError"

let isRefreshing = false
let failedRequestsQueue: any[] = []

interface ApiError {
    message: {
        error: boolean
        code: string
    }
}

export function setupApiClient(ctx = undefined) {
    let cookies = parseCookies(ctx)

    const api = axios.create({
        baseURL: "http://localhost:3333",
        headers: {
            Authorization: `Bearer ${cookies["@devcast-token"]}`
        }
    })
    
    api.interceptors.response.use((response) => {
        return response
    }, (err: AxiosError<ApiError>) => {
        if (err.response?.status === 401) {
            if (err.response.data?.message.code === "token.expired") {
                cookies = parseCookies(ctx)
    
                const { "@devcast-refresh-token": refreshToken } = cookies
                const originalConfig = err.config 
    
                if (!isRefreshing) {
                    isRefreshing = true
    
                    api.post("/authentication/refresh-token", {
                        refreshToken
                    }).then(response => {
                        const { newToken, newRefreshToken } = response.data
        
                        setCookie(ctx, "@devcast-token", newToken, {
                            maxAge: 60 * 60 * 24 * 30,
                            path: "/"
                         })
                
                        setCookie(ctx, "@devcast-refresh-token", newRefreshToken, {
                            maxAge: 60 * 60 * 24 * 30,
                            path: "/"
                        })
        
                        api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`
    
                        failedRequestsQueue.forEach(request => request.onSuccess(newToken))
                        failedRequestsQueue = []
                    }).catch(err => {
                        failedRequestsQueue.forEach(request => request.onFailure(err))
                        failedRequestsQueue = []
    
                        if (typeof window !== 'undefined') {
                            signOut()
                        } 
                    }).finally(() => {
                        isRefreshing = false
                    })
                } 
    
                return new Promise((resolve, reject) => {
                    failedRequestsQueue.push({
                        onSuccess: (token: string) => {
                            if(!originalConfig?.headers) {
                                return 
                            }
    
                            originalConfig.headers['Authorization'] = `Bearer ${token}` 
    
                            resolve(api(originalConfig))
                        },
                        onFailure: (error: AxiosError) => {
                            reject(error)
                        },
                    })
                })
            } else {
                if (typeof window !== 'undefined') {
                    signOut()
                } else {
                    return Promise.reject(new AuthTokenError())        
                }
            }
        }
    
        return Promise.reject(err)
    })

    return api
}