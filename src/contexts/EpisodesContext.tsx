import produce from "immer"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { useContextSelector } from "use-context-selector"
import { api } from "../services/apiClient"
import { useAuth } from "./AuthContext"
import { PlayerContext } from "./PlayerContext"

export type FavoriteEpisode = {
    id: string
    accountId: string
}

export type Applause = {
    id: string
    episodeId: string
    accountId: string
}

type EpisodesContextData = {
    favoritesEpisodes: FavoriteEpisode[]
    isEpisodeFavorite: boolean
    hasEpisodeApplauded: boolean
    handleAddEpisodeToFavorites: () => void
    toggleFavoriteEpisodeState: (state: boolean) => void
    handleApplause: () => void
}

interface EpisodesContextProviderProps {
  children: ReactNode
}

export const EpisodesContext = createContext({} as EpisodesContextData)

export function EpisodesContextProvider({ children }: EpisodesContextProviderProps) {
    const [favoritesEpisodes, setFavoritesEpisodes] = useState<FavoriteEpisode[]>([])
    const [applause, setApplause] = useState<Applause[]>([])
    const [isEpisodeFavorite, setIsEpisodeFavorite] = useState(false)
    const [hasEpisodeApplauded, setHasEpisodeApplauded] = useState(false)

    const { account } = useAuth()
    const episodePlaying = useContextSelector(PlayerContext, ctx => {
        return ctx.episodePlaying
    }) 

    function fetchFavoritesEpisodes() {
        api.get<FavoriteEpisode[]>("/favorites-episodes/short-data")
            .then(response => {
                setFavoritesEpisodes(response.data)
            })
    }

    function fetchAppluseEpisodes() {
        api.get<Applause[]>("/likes")
            .then(response => {
                setApplause(response.data)
            })
    }

    useEffect(() =>  {
        fetchFavoritesEpisodes()
    }, [isEpisodeFavorite])

    useEffect(() =>  {
        fetchAppluseEpisodes()
    }, [])

    async function handleAddEpisodeToFavorites() {
        if (!episodePlaying.id) {
            return;
        }

        const favoriteEpisodeExists = favoritesEpisodes
            .find(episode => episode.id === episodePlaying?.id && episode.accountId === account.id)

        try {
            if (!favoriteEpisodeExists) {
                const response = await api.post<FavoriteEpisode>("/favorites-episodes", {
                    episodeId: episodePlaying.id
                })
    
                const favoriteEpisodeData = response.data
    
                setFavoritesEpisodes(state => [favoriteEpisodeData, ...state])
                setIsEpisodeFavorite(true)
            } else {
                await api.delete(`/favorites-episodes/remove/${episodePlaying.id}`)

                fetchFavoritesEpisodes()
                
                setIsEpisodeFavorite(false)
            }
        } catch (error) {
            alert(error.message)
        }
    }

    async function handleApplause() {
        if (!episodePlaying.id) {
            return;
        }

        const episodeApplaudedExists = applause
            .find(data => data.episodeId === episodePlaying.id && data.accountId === account.id)

        try {
            if (!episodeApplaudedExists) {
                const response = await api.post<Applause>("/likes", {
                    episodeId: episodePlaying.id
                })
    
                const applauseData = response.data
    
                setApplause(state => [applauseData, ...state])
                setHasEpisodeApplauded(true)
            } else {
                await api.delete(`/likes/remove/${episodePlaying.id}`)

                fetchFavoritesEpisodes()
                
                setHasEpisodeApplauded(false)
            }
        } catch (error) {
            alert(error.message)
        }
    }

    function toggleFavoriteEpisodeState(state: boolean) {
        setIsEpisodeFavorite(state)
    }

    useEffect(() =>  {
        if (episodePlaying) {
            if (favoritesEpisodes.some(
                episode => episode.id === episodePlaying?.id 
                && episode.accountId === account?.id)
            ) {
                setIsEpisodeFavorite(true)
            } else {
                setIsEpisodeFavorite(false)
            }
        }
    }, [episodePlaying])

    useEffect(() =>  {
        if (episodePlaying) {
            if (applause.some(
                data => data.episodeId === episodePlaying?.id 
                && data.accountId === account?.id)
            ) {
                setHasEpisodeApplauded(true)
            } else {
                setHasEpisodeApplauded(false)
            }
        }
    }, [episodePlaying])

    return (
        <EpisodesContext.Provider value={{
            favoritesEpisodes,
            isEpisodeFavorite,
            hasEpisodeApplauded,
            handleAddEpisodeToFavorites,
            toggleFavoriteEpisodeState,
            handleApplause,
        }}>
            {children}
        </EpisodesContext.Provider>
    )
}

export function useEpisodes() {
    return useContext(EpisodesContext)
}