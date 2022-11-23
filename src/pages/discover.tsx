import { EpisodeCard } from "../components/EpisodeCard"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { setupApiClient } from "../services/api"
import { DiscoverContainer, DiscoverWrapper } from "../styles/pages/discover"
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

interface DiscoverProps {
  episodes: Episode[]
}

function Discover({ episodes }: DiscoverProps) {
  return (
    <DefaultLayout>
      <DiscoverContainer>
        <DiscoverWrapper>
            <header>
                <h1>
                    Descubra agora os nossos episódios <br /> 
                    mais <strong>populares</strong>
                </h1>

                <p>Saiba quais são os assuntos mais populares  da nossa plataforma</p>
            </header>

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
        </DiscoverWrapper>
      </DiscoverContainer>
    </DefaultLayout>
  )
}

export default Discover

export const getServerSideProps = withSSRPrivate(async ctx => {
  const apiClient = setupApiClient(ctx)

  const response = await apiClient.get<Episode[]>("/episodes")

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