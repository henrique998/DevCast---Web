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
import { ChangeEvent, useState } from "react"
import { SelectedThumbnail } from "../SelectedThumbnail"
import { api } from "../../services/apiClient"

interface ModalContentProps {
    hasPlaylistsCarroussel?: boolean
}

const createNewPlaylistFormValidationSchema = zod.object({
    name: zod.string().min(1, "Campo obrigatório"),
    description: zod.string()
})
  
type CreateNewPlaylistFormData = zod.infer<typeof createNewPlaylistFormValidationSchema>

export function ModalContent({ hasPlaylistsCarroussel = true }: ModalContentProps) {
    const [image, setImage] = useState<File | null>(null)
    const [previewThumbnail, setPreviewThumbnail] = useState('')

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

    async function handleCreateNewPlaylist(data: CreateNewPlaylistFormData) {
        const formData = new FormData()

        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("coverImage", image)

        try {
            await api.post("/playlists", formData)
            
            reset()
            handleResetThumbnail()
    
            toast.custom(() => (
                <Toast 
                    title="Episódio adicionado"
                    description="Parabéns! você adicionou com sucesso este episódio a sua playlist"
                />
            ), {
                position: 'top-right'
            })
        } catch (err) {
            toast.error(err.message)
        }

    }

    const { errors } = formState

    const nameInputError = errors.name?.message
   
    return (
        <Dialog.Portal>
            <DialogOverlay />

            <DialogContent>
                <DialogClose>
                    <XCircle size={24} />
                </DialogClose>

                <DialogTitle>{hasPlaylistsCarroussel ? 'Adicionar a playlist' : 'Criar playlist'}</DialogTitle>

                <ContentContainer>
                    {hasPlaylistsCarroussel && (
                        <>
                            <PlaylistsWrapper>
                                <RadioGroup.Root>
                                    <Swiper
                                        slidesPerView={5}
                                        spaceBetween={20}
                                    >
                                        <SwiperSlide>
                                            <li>
                                                <PlaylistMiniCard value="01" />
                                            </li>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <li>
                                                <PlaylistMiniCard value="02" />
                                            </li>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <li>
                                                <PlaylistMiniCard value="03" />
                                            </li>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <li>
                                                <PlaylistMiniCard value="04" />
                                            </li>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <li>
                                                <PlaylistMiniCard value="05" />
                                            </li>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <li>
                                                <PlaylistMiniCard value="06" />
                                            </li>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <li>
                                                <PlaylistMiniCard value="07" />
                                            </li>
                                        </SwiperSlide>
                                    </Swiper>
                                </RadioGroup.Root>

                                <Button label="Adicionar" />
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