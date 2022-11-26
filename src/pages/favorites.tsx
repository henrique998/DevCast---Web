import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"
import { MicrophoneSlash } from "phosphor-react"
import { useContextSelector } from "use-context-selector"
import { EpisodeCard } from "../components/EpisodeCard"
import { PlayerContext } from "../contexts/PlayerContext"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { setupApiClient } from "../services/api"
import { EmptyFavoritesEpisodesContainer, FavoritesContainer, FavoritesWrapper } from "../styles/pages/favorites"
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString"
import { withSSRPrivate } from "../utils/withSSRPrivate"

type Episode = {
    id: string
    thumbnail: string
    title: string
    members: string
    publishedAt: string
    duration: number
    durationAsString: string
    slug: string
    url: string
    type: string
    accountId: string
}
  
interface FavoritesProps {
    episodes: Episode[]
}

function Favorites({ episodes }: FavoritesProps) {
    const playList = useContextSelector(PlayerContext, ctx => {
        return ctx.playList
    })

    return (
        <DefaultLayout>
        <FavoritesContainer>
            <FavoritesWrapper>
                <header>
                    <h1>
                        <strong>Ouça</strong> agora os seus episódios <br /> 
                        favoritos
                    </h1>

                    <p>Aqui você pode acessar todos os episódios que você mais gostou</p>
                </header>

                {episodes?.length > 0 ? (
                    <ul>
                        {episodes?.map((episode, index) => (
                            <li key={episode.id}>
                                <EpisodeCard 
                                    path={`/episode/${episode.slug}`}
                                    imageUrl={episode.thumbnail}
                                    duration={episode.durationAsString}
                                    title={episode.title}
                                    members={episode.members}
                                    publishedAt={episode.publishedAt}
                                    onPlay={() => playList(episodes, index)}
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <EmptyFavoritesEpisodesContainer>
                        <MicrophoneSlash size={64} weight="fill" />

                        <h2>Você ainda não possui episódios favoritos.</h2>

                        <p>Adicione os episódios que você mais gostou para ouvi-los mais tarde.</p>
                    </EmptyFavoritesEpisodesContainer>
                )}
            </FavoritesWrapper>
        </FavoritesContainer>
        </DefaultLayout>
    )
}

export default Favorites

export const getServerSideProps = withSSRPrivate(async ctx => {
    const apiClient = setupApiClient(ctx)
  
    const response = await apiClient.get<Episode[]>("/favorites-episodes")

    const episodes = response.data.map(episode => {
        return {
            id: episode.id,
            title: episode.title,
            thumbnail: episode.thumbnail,
            slug: episode.slug,
            url: episode.url,
            members: episode.members,
            publishedAt: format(parseISO(episode.publishedAt), 'd MMM yy', {
                locale: ptBR
            }),
            duration: episode.duration,
            durationAsString: convertDurationToTimeString(episode.duration),
            accountId: episode.accountId,
        }
    })
  
    return {
      props: {
        episodes
      }
    }
})
