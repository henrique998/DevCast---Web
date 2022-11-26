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
    PlayerContainer, 
    SliderContainer, 
    SecondaryControllButton, 
    SkipButton,
    SliderRoot,
    SliderTrack,
    SliderRange,
    SliderThumb,
    EmptyPlayerThumbnailContainer,
    InfoContainer,
    ControllsContainer,
    SliderTime,
    ThumbnailContainer
} from "./styles"
import { ModalContent } from "../ModalContent"
import { PlayerContext } from "../../contexts/PlayerContext"
import { useEffect, useRef, useState } from "react"
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString"
import { useEpisodes } from "../../contexts/EpisodesContext"
import { useContextSelector } from "use-context-selector"

export function Player() {
    const { 
        handleAddEpisodeToFavorites, 
        isEpisodeFavorite,
        handleApplause,
        hasEpisodeApplauded 
    } = useEpisodes()

    const episodePlaying = useContextSelector(PlayerContext, ctx => {
        return ctx.episodePlaying
    }) 

    const audioRef = useContextSelector(PlayerContext, ctx => {
        return ctx.audioRef
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

    const updateProgress = useContextSelector(PlayerContext, ctx => {
        return ctx.updateProgress
    }) 

    const setPlayingState = useContextSelector(PlayerContext, ctx => {
        return ctx.setPlayingState
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

    function setupProgressListener() {
        audioRef.current.currentTime = 0

        audioRef.current.addEventListener('timeupdate', () => {
            updateProgress(Math.floor(audioRef.current.currentTime))
        })
    }

    function handleEpisodeEnded() {
        if (hasNext) {
            playNext()
        } else {
            clearPlayerState()
        }
    }

   return (
    <PlayerContainer>
        <header>
            <div>
                <Image 
                    src="/Microphone.svg"
                    alt=""
                    width={32}
                    height={32}
                />

                <span>Tocando agora</span>
            </div>

            <SecondaryControllButton 
                isActive={isEpisodeFavorite} 
                onClick={handleAddEpisodeToFavorites}
                disabled={!episodePlaying}
            >
                <Star size={28} weight="fill" />
            </SecondaryControllButton>
        </header>

        {episodePlaying && (
            <audio 
                src={episodePlaying.url} 
                autoPlay
                loop={isLooping}
                ref={audioRef}
                onPlay={() => setPlayingState(true)}
                onPause={() => setPlayingState(false)}
                onLoadedMetadata={setupProgressListener}
                onEnded={handleEpisodeEnded}
            />
        )}

        {episodePlaying ? (
            <ThumbnailContainer>
                <Image 
                    src={episodePlaying.thumbnail}
                    alt={`thumbnail do episódio: ${episodePlaying.title}`}
                    width={296}
                    height={346}
                />
            </ThumbnailContainer>
        ) : (
            <EmptyPlayerThumbnailContainer>
                <strong>Selecione um podcast para ouvir</strong>
            </EmptyPlayerThumbnailContainer>
        )}

        <InfoContainer>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <SecondaryControllButton isActive={false} disabled={!episodePlaying}>
                        <Queue size={28} weight="fill" />
                    </SecondaryControllButton>
                </Dialog.Trigger>

                <ModalContent 
                    hasPlaylistsCarroussel 
                />
            </Dialog.Root>

            <div className="texts">
                <h2 title={episodePlaying?.title}>
                    {episodePlaying?.title}
                </h2>

                <span title={episodePlaying?.members}>
                    {episodePlaying?.members}
                </span>
            </div>

            <SecondaryControllButton 
                isActive={hasEpisodeApplauded} 
                disabled={!episodePlaying}
                onClick={handleApplause}
            >
                <HandsClapping size={28} weight="fill" />
            </SecondaryControllButton>
        </InfoContainer>

        <SliderContainer>
            <SliderTime isDisabled={!episodePlaying}>
                {convertDurationToTimeString(progress)}
            </SliderTime>

            <SliderRoot 
                max={episodePlaying?.duration} 
                value={[progress]}
                onValueChange={e => handleSeek(e)}
                disabled={!episodePlaying}
            >
                <SliderTrack>
                    <SliderRange />
                </SliderTrack>

                <SliderThumb />
            </SliderRoot>

            <SliderTime isDisabled={!episodePlaying}>
                {convertDurationToTimeString(episodePlaying?.duration ?? 0)}
            </SliderTime>
        </SliderContainer>

        <ControllsContainer>
            <SecondaryControllButton 
                isActive={isShuffling} 
                onClick={toggleShuffle}
                disabled={episodeList?.length === 1}
            >
                <Shuffle size={28} weight="fill" />
            </SecondaryControllButton>

            <SkipButton onClick={playPrevious} disabled={!hasPrevious}>
                <SkipBack size={32} weight="fill" />
            </SkipButton>

            <button 
                className="play-button" 
                onClick={togglePlay}
                disabled={!episodePlaying}
            >
                {isPlaying ? <Pause size={32} weight="fill" /> : <Play size={32} weight="fill" />}
            </button>

            <SkipButton onClick={playNext} disabled={!hasNext}>
                <SkipForward size={32} weight="fill" />
            </SkipButton>

            <SecondaryControllButton 
                isActive={isLooping} 
                onClick={toggleLoop}
                disabled={!episodePlaying}
            >
                <Repeat size={28} weight="fill" />
            </SecondaryControllButton>
        </ControllsContainer>
    </PlayerContainer>
   )
}