import { MutableRefObject, ReactNode, useRef, useState } from "react"
import { createContext, useContextSelector } from "use-context-selector"

export type PlayerEpisode = {
   id: string
   title: string
   thumbnail: string
   members: string
   duration: number
   url: string
}   

type PlayerContextData = {
   episodeList: PlayerEpisode[]
   episodePlaying: PlayerEpisode
   currentEpisodeIndex: number
   progress: number
   play: (episode: PlayerEpisode) => void
   togglePlay: () => void
   toggleLoop: () => void
   toggleShuffle: () => void
   setPlayingState: (state: boolean) => void
   playList: (list: PlayerEpisode[], episodeIndex: number) => void
   playNext: () => void 
   playPrevious: () => void 
   clearPlayerState: () => void
   updateProgress: (value: number) => void
   handleSeek: (amount: number[]) => void
   isPlaying: boolean
   isLooping: boolean
   isShuffling: boolean
   hasPrevious: boolean
   hasNext: boolean
   audioRef: MutableRefObject<HTMLAudioElement>
}

interface PlayerContextProviderProps {
  children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
   const [episodeList, setEpisodeList] = useState<PlayerEpisode[]>([])
   const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
   const [isPlaying, setIsPlaying] = useState(false)
   const [isLooping, setIsLooping] = useState(false)
   const [isShuffling, setIsShuffling] = useState(false)
   const [progress, setProgress] = useState(0)

   const episodePlaying = episodeList[currentEpisodeIndex]

   const audioRef = useRef<HTMLAudioElement>(null)

   function play(episode: PlayerEpisode) {
      setEpisodeList([episode])
      setCurrentEpisodeIndex(0)
      setIsPlaying(true)
   }

   function playList(list: PlayerEpisode[], episodeIndex: number) {
      setEpisodeList(list)
      setCurrentEpisodeIndex(episodeIndex)
      setIsPlaying(true)
   }
   
   function togglePlay() {
      setIsPlaying(!isPlaying)
   }

   function setPlayingState(state: boolean) {
      setIsPlaying(state)
   }

   function toggleLoop() {
      setIsLooping(!isLooping)
   }

   function toggleShuffle() {
      setIsShuffling(!isShuffling)
   }

   function updateProgress(value: number) {
      setProgress(value)
   }

   const hasPrevious = currentEpisodeIndex > 0
   const hasNext = isShuffling || (currentEpisodeIndex + 1) < episodeList.length

   function playNext() {
      if (isShuffling) {
         const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length)

         setCurrentEpisodeIndex(nextRandomEpisodeIndex)
      } else if (hasNext) {
         setCurrentEpisodeIndex(currentEpisodeIndex + 1)
      }

   } 

   function playPrevious() {
      if (hasPrevious) {
         setCurrentEpisodeIndex(currentEpisodeIndex - 1)
      }
   } 

   function clearPlayerState() {
      setEpisodeList([])
      setCurrentEpisodeIndex(0)
   }

   function handleSeek(amount: number[]) {
      amount.forEach(unit => {
         audioRef.current.currentTime = unit
         updateProgress(unit)
      })
  } 

   return (
      <PlayerContext.Provider value={{
         episodeList,
         episodePlaying,
         currentEpisodeIndex,
         progress,
         isPlaying,
         isLooping,
         isShuffling,
         hasNext,
         hasPrevious,
         audioRef,
         play,
         togglePlay,
         toggleLoop,
         toggleShuffle,
         setPlayingState,
         playList,
         updateProgress,
         playNext,
         playPrevious,
         clearPlayerState,
         handleSeek
      }}>
         {children}
      </PlayerContext.Provider>
   )
}
