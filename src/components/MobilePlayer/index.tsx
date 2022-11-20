import Image from "next/image"
import { CaretDown, CaretUp, HandsClapping, Play, Queue, Repeat, Shuffle, SkipBack, SkipForward, Star, X } from "phosphor-react"

import { 
    Container,
    MobilePlayerButton,
    MobilePlayerContainer, 
    MobilePlayerContentContainer, 
    MobilePlayerControllsContainer, 
    MobileSliderContainer, 
    MobileSliderRange, 
    MobileSliderRoot, 
    MobileSliderThumb, 
    MobileSliderTrack, 
    PlayControll, 
    PlayerControll, 
    PreviewMobileSliderContainer
} from "./styles"

export function MobilePlayer() {
   const isShowingDetails = false 

   return (
    <MobilePlayerContainer isShowingDetails={isShowingDetails}>
        <div className="preview">
            <Container className="content">
                <button>
                    <CaretUp size={32} />
                </button>

                <PreviewMobileSliderContainer>
                    <span>12:02</span>

                    <MobileSliderRoot>
                        <MobileSliderTrack>
                            <MobileSliderRange />
                        </MobileSliderTrack>

                        <MobileSliderThumb />
                    </MobileSliderRoot>

                    <span>1:35:18</span>
                </PreviewMobileSliderContainer>

                <button>
                    <X size={32} />
                </button>
            </Container>
        </div>

        <header>
            <Container className="container">
                <button>
                    <CaretDown size={32} />
                </button>

                <strong>Tocando agora</strong>

                <MobilePlayerButton isActive={false}>
                    <Star size={32} weight="fill" />
                </MobilePlayerButton>
            </Container>
        </header>

        <MobilePlayerContentContainer>
            <Container>
                <Image 
                    src="/card-image.png"
                    alt=""
                    width={825}
                    height={825}
                />

                <div className="details">
                    <MobilePlayerButton isActive={false}>
                        <Queue size={28} weight="fill" />
                    </MobilePlayerButton>

                    <div className="texts">
                        <h2>A vida é boa</h2>

                        <span>Tiago, Diego e Pellizzetti</span>
                    </div>

                    <MobilePlayerButton isActive>
                        <HandsClapping size={28} weight="fill" />
                    </MobilePlayerButton>
                </div>

                <MobileSliderContainer>
                    <span>12:02</span>

                        <MobileSliderRoot>
                            <MobileSliderTrack>
                                <MobileSliderRange />
                            </MobileSliderTrack>

                            <MobileSliderThumb />
                        </MobileSliderRoot>

                    <span>1:35:18</span>
                </MobileSliderContainer>

                <MobilePlayerControllsContainer>
                    <MobilePlayerButton isActive={false}>
                        <Shuffle size={32} weight="fill" />
                    </MobilePlayerButton>

                    <PlayerControll disabled>
                        <SkipBack size={36} weight="fill" />
                    </PlayerControll>

                    <PlayControll>
                        <Play size={36} weight="fill" />
                    </PlayControll>

                    <PlayerControll>
                        <SkipForward size={36} weight="fill" />
                    </PlayerControll>

                    <MobilePlayerButton isActive={false}>
                        <Repeat size={32} weight="fill" />
                    </MobilePlayerButton>
                </MobilePlayerControllsContainer>
            </Container>
        </MobilePlayerContentContainer>
    </MobilePlayerContainer> 
   )
}