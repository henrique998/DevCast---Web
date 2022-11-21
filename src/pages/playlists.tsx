import { PlusCircle } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { PlaylistCard } from "../components/PlaylistCard"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { 
  AddButton, 
  PlaylistsContainer, 
  PlaylistsWrapper, 
  ProfilePlaylistsContainer 
} from "../styles/pages/playlists"
import { ModalContent } from "../components/ModalContent"
import { useState } from "react"
import { Toast } from "../components/Toast"

function Playlists() {
  const [isToastOpen, setIsToastOpen] = useState(true)

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

          <ToastPrimitive.Provider>
            <Toast 
              isOpen={isToastOpen}
              onOpenChange={setIsToastOpen}
              title="Episódio adicionado"
              description="Parabéns! você adicionou com sucesso este episódio a sua playlist"
            />
          </ToastPrimitive.Provider>

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
