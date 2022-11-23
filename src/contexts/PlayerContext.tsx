import { createContext, ReactNode, useContext, useState } from "react"

type Episode = {
   title: string
   thumbnail: string
   members: string
   duration: number
   url: string
}   

type PlayerContextData = {
   episodeList: Episode[]
   currentEpisodeIndex: number
   play: (episode: Episode) => void
   togglePlay: () => void
   isPlaying: boolean
}

interface PlayerContextProviderProps {
  children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
   const [episodeList, setEpisodeList] = useState<Episode[]>([])
   const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)

   const [isPlaying, setIsPlaying] = useState(false)

   function play(episode: Episode) {
      setEpisodeList([episode])
      setCurrentEpisodeIndex(0)
      setIsPlaying(true)
   }

   function togglePlay() {
      setIsPlaying(!isPlaying)
   }

   return (
      <PlayerContext.Provider value={{
         episodeList,
         currentEpisodeIndex,
         play,
         togglePlay,
         isPlaying
      }}>
         {children}
      </PlayerContext.Provider>
   )
}

export function usePlayer() {
   return useContext(PlayerContext)
}