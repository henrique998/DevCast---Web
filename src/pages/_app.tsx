import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from '../contexts/AuthContext'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />

        <GlobalStyle />
      </ThemeProvider>
    </AuthContextProvider>
  )
}

export default MyApp