import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { parseCookies } from "nookies"

export function withSSRGuest<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>): GetServerSideProps {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const { '@devcast-token': token } = parseCookies(ctx)

        if (token) {
            return {
                redirect: {
                    destination:'/home',
                    permanent: false
                }
            }
        }

        return await fn(ctx)
    }
}