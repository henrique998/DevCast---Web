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

function Playlists() {
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

            <ModalContent />
          </Dialog.Root>

          <ProfilePlaylistsContainer>
            <h2>Suas playlists</h2>

            <ul>
              <li>
                <PlaylistCard 
                  path="/playlist/01"
                  thumbnailUrl="/card-image.png"
                  name="HTML e Css"
                />
              </li>
            </ul>
          </ProfilePlaylistsContainer>
        </PlaylistsWrapper> 
      </PlaylistsContainer>
    </DefaultLayout>
  )
}

export default Playlists
