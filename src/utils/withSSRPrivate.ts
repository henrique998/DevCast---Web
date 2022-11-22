import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { destroyCookie, parseCookies } from "nookies"
import { AuthTokenError } from "../services/errors/AuthTokenError";

export function withSSRPrivate<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>): GetServerSideProps {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const { '@devcast-token': token } = parseCookies(ctx)

        if (!token) {
            return {
                redirect: {
                    destination:'/sign-in',
                    permanent: false
                }
            }
        }

        try {
            return await fn(ctx)
        } catch (error) {
            if (error instanceof AuthTokenError) {
                destroyCookie(ctx, "@devcast-token")
                destroyCookie(ctx, "@devcast-refresh-token")

                return {
                    redirect: {
                        destination: '/sign-in',
                        permanent: false
                    }
                }
            }
        }
    }
}