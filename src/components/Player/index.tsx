import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import { 
    HandsClapping, 
    Pause, 
    Play, 
    Queue, 
    Repeat, 
    Shuffle, 
    SkipBack, 
    SkipForward, 
    Star 
} from "phosphor-react"

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
import { ModalContent } from "../ModalContent"
import { usePlayer } from "../../contexts/PlayerContext"
import { useEffect, useRef } from "react"

export function Player() {
    const { isPlaying, episodeList, currentEpisodeIndex, togglePlay } = usePlayer()
    const audioRef = useRef<HTMLAudioElement>(null)

    const episodePlaying = episodeList[currentEpisodeIndex]

    useEffect(() =>  {
      if (!audioRef.current) {
        return;
      }

      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }, [isPlaying])

   return (
    <PlayerContainer isPlaying={!!episodePlaying}>
        <EpisodeDetailsContainer>
            <Image 
                src={episodePlaying?.thumbnail}
                alt=""
                width={150}
                height={150}
            /> 

            <div className="texts">
                <h3 title={episodePlaying?.title}>
                    {episodePlaying?.title}
                </h3>

                <span title={episodePlaying?.members}>
                    {episodePlaying?.members}
                </span>
            </div>
        </EpisodeDetailsContainer>

        {episodePlaying && (
            <audio 
                src={episodePlaying.url} 
                autoPlay
                ref={audioRef}
            />
        )}

        <PrimaryButtonsContainer>
            <SkipButton disabled>
                <SkipBack size={32} weight="fill" />
            </SkipButton>

            <button className="play-button" onClick={togglePlay}>
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

            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <SecondaryControllButton isActive={false}>
                        <Queue size={28} weight="fill" />
                    </SecondaryControllButton>
                </Dialog.Trigger>

                <ModalContent 
                    hasPlaylistsCarroussel 
                    onCreate={() => console.log('hello')}
                />
            </Dialog.Root>

            <SecondaryControllButton isActive>
                <HandsClapping size={28} weight="fill" />
            </SecondaryControllButton>
        </SecondaryButtonsContainer> 
    </PlayerContainer>
   )
}