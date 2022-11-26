import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from '../contexts/AuthContext'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'
import { PlaylistContextProvider } from '../contexts/PlaylistContext'
import { PlayerContextProvider } from '../contexts/PlayerContext'
import { EpisodesContextProvider } from '../contexts/EpisodesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <PlayerContextProvider>
        <EpisodesContextProvider>
          <PlaylistContextProvider>
              <ThemeProvider theme={defaultTheme}>
                <Component {...pageProps} />

                <GlobalStyle />

                <Toaster />
              </ThemeProvider>
          </PlaylistContextProvider>
        </EpisodesContextProvider>
      </PlayerContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp