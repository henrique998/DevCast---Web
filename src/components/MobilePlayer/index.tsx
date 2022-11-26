import Image from "next/image"
import { 
    CaretDown, 
    CaretUp, 
    HandsClapping, 
    Pause, 
    Play, 
    Queue, 
    Repeat, 
    Shuffle, 
    SkipBack, 
    SkipForward, 
    Star, 
    X 
} from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"
import * as ToastPrimitive from "@radix-ui/react-toast"

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
    PlayerPreview, 
    PreviewMobileSliderContainer
} from "./styles"
import { ModalContent } from "../ModalContent"
import { PlayerContext } from "../../contexts/PlayerContext"
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString"
import { useEffect, useState } from "react"
import { useEpisodes } from "../../contexts/EpisodesContext"
import { useContextSelector } from "use-context-selector"

export function MobilePlayer() {
    const [isShowingDetails, setIsShowingDetails] = useState(false)

    const episodePlaying = useContextSelector(PlayerContext, ctx => {
        return ctx.episodePlaying
    }) 
     
    const progress = useContextSelector(PlayerContext, ctx => {
        return ctx.progress
    }) 

    const handleSeek = useContextSelector(PlayerContext, ctx => {
        return ctx.handleSeek
    })
     
    const isShuffling = useContextSelector(PlayerContext, ctx => {
        return ctx.isShuffling
    })
     
    const toggleShuffle = useContextSelector(PlayerContext, ctx => {
        return ctx.toggleShuffle
    })

    const episodeList = useContextSelector(PlayerContext, ctx => {
        return ctx.episodeList
    })

    const playPrevious = useContextSelector(PlayerContext, ctx => {
        return ctx.playPrevious
    })
     
    const hasPrevious = useContextSelector(PlayerContext, ctx => {
        return ctx.hasPrevious
    })
     
    const togglePlay = useContextSelector(PlayerContext, ctx => {
        return ctx.togglePlay
    })
    
    const toggleLoop = useContextSelector(PlayerContext, ctx => {
        return ctx.toggleLoop
    })
    
    const isPlaying = useContextSelector(PlayerContext, ctx => {
        return ctx.isPlaying
    })
    
    const isLooping = useContextSelector(PlayerContext, ctx => {
        return ctx.isLooping
    })
    
    const playNext = useContextSelector(PlayerContext, ctx => {
        return ctx.playNext
    })
     
    const hasNext = useContextSelector(PlayerContext, ctx => {
        return ctx.hasNext
    })
    
    const clearPlayerState = useContextSelector(PlayerContext, ctx => {
        return ctx.clearPlayerState
    })
   
    const { 
        isEpisodeFavorite, 
        handleAddEpisodeToFavorites,
        handleApplause,
        hasEpisodeApplauded
    } = useEpisodes()

   useEffect(() =>  {
    if (episodePlaying) {
        setIsShowingDetails(true)
    } else {
        setIsShowingDetails(false)
    }
   }, [episodePlaying])

   return (
       <>
            {isShowingDetails ? (
                <MobilePlayerContainer>
                    <header>
                        <Container className="container">
                            <button onClick={() => setIsShowingDetails(false)}>
                                <CaretDown size={32} />
                            </button>

                            <strong>Tocando agora</strong>

                            <MobilePlayerButton
                                isActive={isEpisodeFavorite} 
                                onClick={handleAddEpisodeToFavorites}
                                disabled={!episodePlaying}
                            >
                                <Star size={32} weight="fill" />
                            </MobilePlayerButton>
                        </Container>
                    </header>

                    <MobilePlayerContentContainer>
                        <Container>
                            <Image 
                                src={episodePlaying?.thumbnail ?? ""}
                                alt=""
                                width={825}
                                height={825}
                            />

                            <div className="details">
                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <MobilePlayerButton isActive={false}>
                                            <Queue size={28} weight="fill" />
                                        </MobilePlayerButton>
                                    </Dialog.Trigger>

                                    <ModalContent />
                                </Dialog.Root>

                                <div className="texts">
                                    <h2>{episodePlaying?.title}</h2>

                                    <span>{episodePlaying?.members}</span>
                                </div>

                                <MobilePlayerButton 
                                    isActive={hasEpisodeApplauded}
                                    onClick={handleApplause}
                                >
                                    <HandsClapping size={28} weight="fill" />
                                </MobilePlayerButton>
                            </div>

                            <MobileSliderContainer>
                                <span>{convertDurationToTimeString(progress)}</span>

                                    <MobileSliderRoot
                                        max={episodePlaying?.duration} 
                                        value={[progress]}
                                        onValueChange={e => handleSeek(e)}
                                        disabled={!episodePlaying}
                                    >
                                        <MobileSliderTrack>
                                            <MobileSliderRange />
                                        </MobileSliderTrack>

                                        <MobileSliderThumb />
                                    </MobileSliderRoot>

                                <span>{convertDurationToTimeString(episodePlaying?.duration ?? 0)}</span>
                            </MobileSliderContainer>

                            <MobilePlayerControllsContainer>
                                <MobilePlayerButton
                                    isActive={isShuffling} 
                                    onClick={toggleShuffle}
                                    disabled={episodeList?.length === 1}
                                >
                                    <Shuffle size={32} weight="fill" />
                                </MobilePlayerButton>

                                <PlayerControll onClick={playPrevious} disabled={!hasPrevious}>
                                    <SkipBack size={36} weight="fill" />
                                </PlayerControll>

                                <PlayControll
                                    onClick={togglePlay}
                                    disabled={!episodePlaying}
                                >
                                    {isPlaying ? <Pause size={36} weight="fill" /> : <Play size={36} weight="fill" />}
                                </PlayControll>

                                <PlayerControll onClick={playNext} disabled={!hasNext}>
                                    <SkipForward size={36} weight="fill" />
                                </PlayerControll>

                                <MobilePlayerButton
                                    isActive={isLooping} 
                                    onClick={toggleLoop}
                                    disabled={!episodePlaying}
                                >
                                    <Repeat size={32} weight="fill" />
                                </MobilePlayerButton>
                            </MobilePlayerControllsContainer>
                        </Container>
                    </MobilePlayerContentContainer>
                </MobilePlayerContainer> 
            ) : (
                <PlayerPreview>
                    <Container className="content">
                        <button onClick={() => setIsShowingDetails(true)}>
                            <CaretUp size={32} />
                        </button>

                        <PreviewMobileSliderContainer>
                            <span>{convertDurationToTimeString(progress)}</span>

                            <MobileSliderRoot
                                max={episodePlaying?.duration} 
                                value={[progress]}
                                onValueChange={e => handleSeek(e)}
                                disabled={!episodePlaying}
                            >
                                <MobileSliderTrack>
                                    <MobileSliderRange />
                                </MobileSliderTrack>

                                <MobileSliderThumb />
                            </MobileSliderRoot>

                            <span>{convertDurationToTimeString(episodePlaying?.duration ?? 0)}</span>
                        </PreviewMobileSliderContainer>

                        <button onClick={clearPlayerState}>
                            <X size={32} />
                        </button>
                    </Container>
                </PlayerPreview>
            )}
       </>
   )
}
