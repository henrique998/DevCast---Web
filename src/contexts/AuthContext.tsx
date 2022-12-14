import Router from "next/router"
import { setCookie, parseCookies, destroyCookie } from "nookies"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../services/apiClient"

type SignInCredentials = {
   email: string
   password: string
}

type SignUpCredentials = {
   name: string
   email: string
   password: string
}

type Account = {
   id: string
   name: string
   email: string
   avatarUrl: string | null
}

type AuthContextData = {
   isUserAuthenticated: boolean
   signIn: (data: SignInCredentials) => Promise<void>
   signUp: (data: SignUpCredentials) => Promise<void>
   signOut: () => void
   account: Account | undefined
   setAccount: (data: Account) => void
}

interface AuthContextProviderProps {
  children: ReactNode
}

interface IAxiosResponse {
   userData: Account
   token: string
   refreshToken: string
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
   destroyCookie(undefined, "@devcast-token")
   destroyCookie(undefined, "@devcast-refresh-token")

   Router.push("/sign-in")
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
   const [account, setAccount] = useState<Account>()
   const isUserAuthenticated = !!account

   useEffect(() =>  {
     const { "@devcast-token": token } = parseCookies()

     if (token) {
      api.get<Account>("/accounts/me")
         .then(response => setAccount(response.data))
         .catch(() => {
            signOut()
         })
     }
   }, [])

   useEffect(() =>  {
      const url = new URLSearchParams(window.location.search)

      const code = url.get('code')

      try {
         if (code) {
            api.post<IAxiosResponse>("/authentication/github", {
               github_code: code,
            })
            .then((response) => {
               const { token, refreshToken, userData } = response.data
   
               setCookie(undefined, "@devcast-token", token, {
                  maxAge: 60 * 60 * 24 * 30,
                  path: "/"
               })
   
               setCookie(undefined, "@devcast-refresh-token", refreshToken, {
                  maxAge: 60 * 60 * 24 * 30,
                  path: "/"
               })
   
               setAccount(userData)
   
               api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            })
   
            url.delete('code')
   
            Router.push('/home')
         }
      } catch (error) {
         console.log(error)
      }
   }, [])

   async function signIn(credentials: SignInCredentials) {
      try {
         const { data } = await api.post<IAxiosResponse>("/authentication/credentials", {
            email: credentials.email,
            password: credentials.password
         })

         setCookie(undefined, "@devcast-token", data.token, {
            maxAge: 60 * 60 * 24 * 30,
            path: "/"
         })

         setCookie(undefined, "@devcast-refresh-token", data.refreshToken, {
            maxAge: 60 * 60 * 24 * 30,
            path: "/"
         })

         setAccount(data.userData)

         api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

         Router.push("/home")
      } catch (error: any) {
         console.log(error)
      }
   } 

   async function signUp(data: SignUpCredentials) {
      try {
         await api.post('/accounts', {
            name: data.name, 
            email: data.email, 
            password: data.password
         })

         Router.push('/sign-in')
      } catch (error) {
         alert(error.message)
      }
   }

   return (
      <AuthContext.Provider value={{
         isUserAuthenticated, 
         signIn,
         signUp,
         account,
         setAccount,
         signOut
      }}>
         {children}
      </AuthContext.Provider>
   )
}

export function useAuth() {
   return useContext(AuthContext)
}