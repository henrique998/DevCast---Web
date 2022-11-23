import { MicrophoneSlash } from "phosphor-react"
import { EpisodeCard } from "../components/EpisodeCard"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { setupApiClient } from "../services/api"
import { EmptyFavoritesEpisodesContainer, FavoritesContainer, FavoritesWrapper } from "../styles/pages/favorites"
import { withSSRPrivate } from "../utils/withSSRPrivate"

type Episode = {
    id: string
    thumbnail: string
    title: string
    members: string
    publishedAt: string
    duration: string
    slug: string
    url: string
    type: string
}
  
interface FavoritesProps {
    episodes: Episode[]
}

function Favorites({ episodes }: FavoritesProps) {
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
                    {episodes?.map(episode => (
                        <li key={episode.id}>
                            <EpisodeCard 
                                path={`/episode/${episode.slug}`}
                                imageUrl={episode.thumbnail}
                                duration={episode.duration}
                                title={episode.title}
                                members={episode.members}
                                publishedAt={episode.publishedAt}
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
            members: episode.members,
            publishedAt: episode.publishedAt,
            duration: episode.duration.toString(),
        }
    })
  
    return {
      props: {
        episodes
      }
    }
})
