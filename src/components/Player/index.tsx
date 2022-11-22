import Image from "next/image"
import { HandsClapping, Pause, Play, Queue, Repeat, Shuffle, SkipBack, SkipForward, Star } from "phosphor-react"

import { 
    PrimaryButtonsContainer, 
    SecondaryButtonsContainer, 
    EpisodeDetailsContainer, 
    PlayerContainer, 
    SliderContainer, 
    SecondaryControllButton, 
    SkipButton,
    SliderRoot,
    SliderTrack,
    SliderRange,
    SliderThumb
} from "./styles"

export function Player() {
   const isPlaying = false 

   return (
    <PlayerContainer isPlaying={isPlaying}>
        <EpisodeDetailsContainer>
            <Image 
                src="/card-image.png"
                alt=""
                width={150}
                height={150}
            /> 

            <div className="texts">
                <h3 title="A vida é boa">
                    A vida é boa
                </h3>

                <span title="Tiago, Diego e Pellizzetti">
                    Tiago, Diego e Pellizzetti
                </span>
            </div>
        </EpisodeDetailsContainer>

        <PrimaryButtonsContainer>
            <SkipButton disabled>
                <SkipBack size={32} weight="fill" />
            </SkipButton>

            <button className="play-button">
                {isPlaying ? <Pause size={32} weight="fill" /> : <Play size={32} weight="fill" />}
            </button>

            <SkipButton>
                <SkipForward size={32} weight="fill" />
            </SkipButton>
        </PrimaryButtonsContainer>

        <SliderContainer>
            <span>12:02</span>

            <SliderRoot>
                <SliderTrack>
                    <SliderRange />
                </SliderTrack>

                <SliderThumb />
            </SliderRoot>

            <span>1:35:18</span>
        </SliderContainer>

        <SecondaryButtonsContainer>
            <SecondaryControllButton isActive={false}>
                <Shuffle size={28} weight="fill" />
            </SecondaryControllButton>

            <SecondaryControllButton isActive>
                <Repeat size={28} weight="fill" />
            </SecondaryControllButton>

            <SecondaryControllButton isActive={false}>
                <Star size={28} weight="fill" />
            </SecondaryControllButton>

            <SecondaryControllButton isActive={false}>
                <Queue size={28} weight="fill" />
            </SecondaryControllButton>

            <SecondaryControllButton isActive>
                <HandsClapping size={28} weight="fill" />
            </SecondaryControllButton>
        </SecondaryButtonsContainer> 
    </PlayerContainer>
   )
}