import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { EpisodeCard } from "../components/EpisodeCard"
import { Table } from "../components/Table"

import { DefaultLayout } from "../layouts/DefaultLayout"

import { 
  AllRealeasesTableContainer, 
  HomeContainer, 
  HomeWrapper, 
  LastReleasesContainer, 
  MobileCarrousselContainer
} from "../styles/pages/home"

import { withSSRPrivate } from "../utils/withSSRPrivate"
import { setupApiClient } from "../services/api"
import { format, parseISO } from "date-fns"
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString"
import { ptBR } from "date-fns/locale"
import { PlayerContext, PlayerEpisode } from "../contexts/PlayerContext"
import { useContextSelector } from "use-context-selector"

type Episode = {
  id: string
  thumbnail: string
  title: string
  members: string
  publishedAt: string
  duration: number
  likes: number
  slug: string
  url: string
  type: string
}

type TableEpisode = {
  id: string
  thumbnail: string
  title: string
  slug: string
  members: string
  publishedAt: string
  duration: number
  durationAsString: string
  url: string
  aplauses: number
}

export type LastEpisode = {
  id: string
  thumbnail: string
  title: string
  members: string
  publishedAt: string
  duration: number
  durationAsString: string
  slug: string
  url: string
}

interface HomeProps {
  lastEpisodes: LastEpisode[]
  allEpisodes: TableEpisode[]
}

function Home({ allEpisodes, lastEpisodes }: HomeProps) {
  const episodesList: PlayerEpisode[] = [...lastEpisodes, ...allEpisodes]

  const playList = useContextSelector(PlayerContext, ctx => {
    return ctx.playList
  })

  return (
    <DefaultLayout>
      <HomeContainer>
        <HomeWrapper>
          <LastReleasesContainer>
            <h2>Últimos lançamentos</h2>

            <ul>
              {lastEpisodes.map((episode, index) => (
                <li key={episode.id}>
                  <EpisodeCard 
                    path={`/episode/${episode.slug}`}
                    imageUrl={episode.thumbnail}
                    duration={episode.durationAsString}
                    title={episode.title}
                    members={episode.members}
                    publishedAt={episode.publishedAt}
                    onPlay={() => playList(episodesList, index)}
                  />
                </li>
              ))}
            </ul>

            <MobileCarrousselContainer>
              <ul>
                <Swiper
                  slidesPerView={1.2}
                  spaceBetween={18}
                >
                  {lastEpisodes.map((episode, index) => (
                    <li key={episode.id}>
                      <SwiperSlide>
                        <EpisodeCard 
                          path={`/episode/${episode.slug}`}
                          imageUrl={episode.thumbnail}
                          duration={episode.durationAsString}
                          title={episode.title}
                          members={episode.members}
                          publishedAt={episode.publishedAt}
                          onPlay={() => playList(episodesList, index)}
                        />
                      </SwiperSlide>
                    </li>
                  ))}
                </Swiper>
              </ul>
            </MobileCarrousselContainer>
          </LastReleasesContainer>

          <AllRealeasesTableContainer>
            <h2>Todos os lançamentos</h2>
             
            <Table 
              lastEpisodes={lastEpisodes} 
              tableEpisodes={allEpisodes} 
              episodesList={episodesList}
            />
          </AllRealeasesTableContainer>
        </HomeWrapper>
      </HomeContainer>
    </DefaultLayout>
  )
}

export default Home

export const getServerSideProps = withSSRPrivate(async ctx => {
  const apiClient = setupApiClient(ctx)

  const response = await apiClient.get<Episode[]>("/episodes")

  const episodes = response.data

  const lastEpisodes: LastEpisode[] = episodes.slice(0, 4)
    .map(episode => {
      return {
        id: episode.id,
        thumbnail: episode.thumbnail,
        title: episode.title,
        url: episode.url,
        slug: episode.slug,
        members: episode.members,
        publishedAt: format(parseISO(episode.publishedAt), 'd MMM yy', {
          locale: ptBR
        }),
        duration: episode.duration,
        durationAsString: convertDurationToTimeString(episode.duration),
        aplauses: episode.likes
      }
    })
  

  const allEpisodes: TableEpisode[] = episodes.slice(4, episodes.length)
    .map(episode => {
      return {
        id: episode.id,
        thumbnail: episode.thumbnail,
        title: episode.title,
        slug: episode.slug,
        members: episode.members,
        publishedAt: format(parseISO(episode.publishedAt), 'd MMM yy', {
          locale: ptBR
        }),
        duration: episode.duration,
        durationAsString: convertDurationToTimeString(episode.duration),
        url: episode.url,
        aplauses: episode.likes
      }
    })

  return {
    props: {
      lastEpisodes,
      allEpisodes
    }
  }
})
