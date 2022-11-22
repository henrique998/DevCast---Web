import { PlusCircle } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"
import { PlaylistCard } from "../components/PlaylistCard"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { 
  AddButton, 
  PlaylistsContainer, 
  PlaylistsWrapper, 
  ProfilePlaylistsContainer 
} from "../styles/pages/playlists"
import { ModalContent } from "../components/ModalContent"
import { Toast } from "../components/Toast"
import { withSSRPrivate } from "../utils/withSSRPrivate"
import { setupApiClient } from "../services/api"

type Playlist = {
  id: string
  name: string
  coverImage: string
  slug: string
  episodesCount: number
}

interface PlaylistsProps {
  playlists: Playlist[]
}

function Playlists({ playlists }: PlaylistsProps) {
  return (
    <DefaultLayout>
      <PlaylistsContainer>
        <PlaylistsWrapper>
          <header>
            <h1>
              Crie e organize as suas <strong>playlists</strong> e adicione <br /> 
              <strong>episódios</strong> para ouvir mais tarde
            </h1>

            <p>Guarde os seu episódios favoritos em playlists personalizadas</p>
          </header>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <AddButton>
                <PlusCircle size={32} />

                <span>Criar Playlist</span>
              </AddButton>
            </Dialog.Trigger>

            <ModalContent hasPlaylistsCarroussel={false} />
          </Dialog.Root>

          <ProfilePlaylistsContainer>
            <h2>Suas playlists</h2>

            <ul>
              {playlists?.map(playlist => (
                <li key={playlist.id}>
                  <PlaylistCard 
                    path={playlist.slug}
                    thumbnailUrl={playlist.coverImage}
                    name={playlist.name}
                    episodesCount={playlist.episodesCount}
                  />
                </li>
              ))}
            </ul>
          </ProfilePlaylistsContainer>
        </PlaylistsWrapper> 
      </PlaylistsContainer>
    </DefaultLayout>
  )
}

export default Playlists

export const getServerSideProps = withSSRPrivate(async ctx => {
  const apiClient = setupApiClient(ctx)

  const response = await apiClient.get<Playlist[]>("/playlists")

  return {
    props: {
      playlists: response.data
    }
  }
})