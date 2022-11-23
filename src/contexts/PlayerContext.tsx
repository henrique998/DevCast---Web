import { createContext, ReactNode } from "react"

type PlayerContextData = {}

interface PlayerContextProviderProps {
  children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
   return (
       <PlayerContext.Provider value={{}}>
          {children}
       </PlayerContext.Provider>
   )
}