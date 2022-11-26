import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"
import { EpisodeCard } from "../components/EpisodeCard"
import { usePlayer } from "../contexts/PlayerContext"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { setupApiClient } from "../services/api"
import { DiscoverContainer, DiscoverWrapper } from "../styles/pages/discover"
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
}

interface DiscoverProps {
  episodes: Episode[]
}

function Discover({ episodes }: DiscoverProps) {
  const { playList } = usePlayer()

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
      publishedAt: format(parseISO(episode.publishedAt), 'd MMM yy', {
        locale: ptBR
      }),
      duration: episode.duration,
      durationAsString: convertDurationToTimeString(episode.duration),
    }
  })
  
  return {
    props: {
      episodes
    }
  }
})