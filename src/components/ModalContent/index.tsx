import Image from "next/image"
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

export function ModalContent() {
   return (
    <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
            <DialogClose>
                <XCircle size={24} />
            </DialogClose>

            <DialogTitle>Adicionar a playlist</DialogTitle>

            <ContentContainer>
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

                <form>
                    <InputGroup>
                        <label htmlFor="playlist-name">
                        Nome da playlist<strong>*</strong>
                        </label>

                        <Input 
                        id="playlist-name"
                        placeholder="minha playlist"
                        />
                    </InputGroup>

                    <div>
                        <ImageFieldset>
                            <input 
                                type="file" 
                                id="thumbnail" 
                                hidden 
                            />

                            <h3>Capa</h3>

                            <label htmlFor="thumbnail">
                                <Image
                                    src="/image-ilustration.svg"
                                    alt=""
                                    width={50}
                                    height={50}
                                />
                            </label>
                        </ImageFieldset>

                        <InputGroup>
                            <label htmlFor="description">
                                Descrição
                            </label>

                            <textarea 
                                id="description" 
                                placeholder="Descrição da minha playlist"  
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