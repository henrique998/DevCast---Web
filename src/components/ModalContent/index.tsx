import Image from "next/image"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import toast from 'react-hot-toast'
import * as Dialog from "@radix-ui/react-dialog"
import * as RadioGroup from "@radix-ui/react-radio-group"
import { XCircle } from "phosphor-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { Input } from "../Input"
import { Button } from "../Button"
import { InputGroup } from "../InputGroup"
import { PlaylistMiniCard } from "../PlaylistMiniCard"

import { 
    ContentContainer, 
    DialogClose, 
    DialogContent, 
    DialogOverlay, 
    DialogTitle, 
    FormSeparator, 
    FormSeparatorIndicator, 
    ImageFieldset, 
    PlaylistsWrapper 
} from "./styles"
import { Toast } from "../Toast"
import { ChangeEvent, useCallback, useState } from "react"
import { SelectedThumbnail } from "../SelectedThumbnail"
import { api } from "../../services/apiClient"
import { Playlist, usePlaylists } from "../../contexts/PlaylistContext"
import { PlayerContext } from "../../contexts/PlayerContext"
import { useContextSelector } from "use-context-selector"

interface ModalContentProps {
    hasPlaylistsCarroussel?: boolean
    onCreate?: (playlist: Playlist) => void
}

const createNewPlaylistFormValidationSchema = zod.object({
    name: zod.string().min(1, "Campo obrigatório"),
    description: zod.string()
})
  
type CreateNewPlaylistFormData = zod.infer<typeof createNewPlaylistFormValidationSchema>

export function ModalContent({ hasPlaylistsCarroussel = true, onCreate }: ModalContentProps) {
    const [image, setImage] = useState<File | null>(null)
    const [previewThumbnail, setPreviewThumbnail] = useState('')
    const [selectedPlaylistId, setSelectedPlaylistId] = useState('')

    const { playlists, updateListOfPlaylists } = usePlaylists()

    const episodePlaying = useContextSelector(PlayerContext, ctx => {
        return ctx.episodePlaying
    }) 

    const { register, handleSubmit, formState, reset } = useForm<CreateNewPlaylistFormData>({
        resolver: zodResolver(createNewPlaylistFormValidationSchema)
    })

    function handleSelectThumbnail(e: ChangeEvent<HTMLInputElement>) {
        const selectedImage = e.target.files[0]
        
        if (!selectedImage) {
            return
        }

        setImage(selectedImage)

        const previewThumbnailUrl = URL.createObjectURL(selectedImage)

        setPreviewThumbnail(previewThumbnailUrl)
    }

    function handleResetThumbnail() {
        setImage(null)
        setPreviewThumbnail('')
    }

    const handleCreateNewPlaylist = useCallback(async (data: CreateNewPlaylistFormData) => {
        const formData = new FormData()

        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("coverImage", image)

        try {
            const response = await api.post<Playlist>("/playlists", formData)

            updateListOfPlaylists(response.data)
            
            reset()

            handleResetThumbnail()
    
            toast.custom(() => (
                <Toast 
                    title="Playlist criada com sucesso"
                    description="Parabéns! você criou uma playlist e já pode adicionar episódios"
                />
            ), {
                position: 'top-right'
            })
        } catch (err) {
            toast.error(err.message)
        }

    }, [])

    const handleAddEpisodeToPlaylist = useCallback(async () => {
        if (!selectedPlaylistId || !episodePlaying.id) {
            return;
        }

        try {
            await api.post(`/playlists/add-episode/${episodePlaying.id}`, {
                playlistId: selectedPlaylistId
            })

            setSelectedPlaylistId('')

            alert('Episódio adicionado a playlist com sucesso!')
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const { errors } = formState

    const nameInputError = errors.name?.message
   
    return (
        <Dialog.Portal>
            <DialogOverlay />

            <DialogContent>
                <DialogClose>
                    <XCircle size={24} />
                </DialogClose>

                <DialogTitle>
                    {
                        hasPlaylistsCarroussel 
                        ? 'Adicionar a playlist' 
                        : 'Criar playlist'
                    }
                </DialogTitle>

                <ContentContainer>
                    {hasPlaylistsCarroussel && (
                        <>
                            <PlaylistsWrapper>
                                <RadioGroup.Root
                                    value={selectedPlaylistId}
                                    onValueChange={value => setSelectedPlaylistId(value)}
                                >
                                    <Swiper
                                        slidesPerView={5}
                                        spaceBetween={20}
                                    >
                                        {playlists?.map(playlist => (
                                            <SwiperSlide key={playlist.id}>
                                                <li>
                                                    <PlaylistMiniCard 
                                                        value={playlist.id}
                                                        thumbnail={playlist?.coverImage ?? ""} 
                                                        title={playlist.name}
                                                    />
                                                </li>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </RadioGroup.Root>

                                <Button 
                                    label="Adicionar" 
                                    type="submit"
                                    onClick={handleAddEpisodeToPlaylist}
                                />
                            </PlaylistsWrapper>

                            <FormSeparator>
                                <FormSeparatorIndicator /> 
                                    Ou crie uma nova
                                <FormSeparatorIndicator /> 
                            </FormSeparator>
                        </>
                    )}

                    <form onSubmit={handleSubmit(handleCreateNewPlaylist)}>
                        <InputGroup>
                            <label htmlFor="playlist-name">
                                Nome da playlist<strong>*</strong>
                            </label>

                            <Input 
                                id="playlist-name"
                                placeholder="minha playlist"
                                {...register('name')}
                                error={nameInputError}
                            />
                        </InputGroup>

                        <div>
                            <ImageFieldset>
                                <input 
                                    type="file" 
                                    id="thumbnail" 
                                    hidden 
                                    onChange={handleSelectThumbnail}
                                />

                                <h3>Capa</h3>

                                {previewThumbnail ? (
                                    <SelectedThumbnail 
                                        thumbnailUrl={previewThumbnail}
                                        onDelete={handleResetThumbnail}
                                    />
                                ) : (
                                    <>
                                        <label htmlFor="thumbnail">
                                            <Image
                                                src="/image-ilustration.svg"
                                                alt=""
                                                width={50}
                                                height={50}
                                            />
                                        </label>
                                    </>
                                )}
                            </ImageFieldset>

                            <InputGroup>
                                <label htmlFor="description">
                                    Descrição
                                </label>

                                <textarea 
                                    id="description" 
                                    placeholder="Descrição da minha playlist"  
                                    {...register('description')}
                                />
                            </InputGroup>
                        </div>

                        <Button label="Criar playlist" />
                    </form>
                </ContentContainer>
            </DialogContent>
        </Dialog.Portal>
    )
}