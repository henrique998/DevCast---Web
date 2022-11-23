import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../services/apiClient"

export type Playlist = {
    id: string
    name: string
    coverImage: string
    slug: string
    episodesCount: number
}

type PlaylistContextData = {
    playlists: Playlist[]
    handleUpdateListOfPlaylists: (playlist: Playlist) => void
}

interface PlaylistContextProviderProps {
  children: ReactNode
}

export const PlaylistContext = createContext({} as PlaylistContextData)

export function PlaylistContextProvider({ children }: PlaylistContextProviderProps) {
    const [playlists, setPlaylists] = useState<Playlist[]>([])

    useEffect(() =>  {
        api.get<Playlist[]>("/playlists")
            .then(response => setPlaylists(response.data))
    }, [])

    function handleUpdateListOfPlaylists(playlist: Playlist) {
        setPlaylists(data => [playlist, ...data])
    }

    return (
        <PlaylistContext.Provider value={{
            playlists,
            handleUpdateListOfPlaylists
        }}>
            {children}
        </PlaylistContext.Provider>
    )
}

export function usePlaylists() {
    return useContext(PlaylistContext)
}