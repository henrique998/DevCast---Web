import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { EpisodeCard } from "../components/EpisodeCard"
import { Player } from "../components/Player"
import { Table } from "../components/Table"

import { DefaultLayout } from "../layouts/DefaultLayout"

import { 
  AllRealeasesTableContainer, 
  HomeContainer, 
  HomeWrapper, 
  LastReleasesContainer, 
  MobileCarrousselContainer
} from "../styles/pages/home"

import { tableData } from "../utils/table.data"
import { withSSRPrivate } from "../utils/withSSRPrivate"
import { setupApiClient } from "../services/api"

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

interface HomeProps {
  episodes: any[]
}

function Home({ episodes }: HomeProps) {
  return (
    <DefaultLayout>
      <HomeContainer>
        <HomeWrapper>
          <LastReleasesContainer>
            <h2>Últimos lançamentos</h2>

            <ul>
              <li>
                <EpisodeCard 
                  path="/episode/01" 
                  imageUrl="/card-image.png"
                  duration="1:35:18"
                  title="O que é um bom código?"
                  members="Diego e Richard"
                  publishedAt="8 Jan 22"
                />
              </li>

              <li>
                <EpisodeCard 
                  path="/episode/01" 
                  imageUrl="/card-image.png"
                  duration="1:35:18"
                  title="O que é um bom código?"
                  members="Diego e Richard"
                  publishedAt="8 Jan 22"
                />
              </li>

              <li>
                <EpisodeCard 
                  path="/episode/01" 
                  imageUrl="/card-image.png"
                  duration="1:35:18"
                  title="O que é um bom código?"
                  members="Diego e Richard"
                  publishedAt="8 Jan 22"
                />
              </li>

              <li>
                <EpisodeCard 
                  path="/episode/01" 
                  imageUrl="/card-image.png"
                  duration="1:35:18"
                  title="O que é um bom código?"
                  members="Diego e Richard"
                  publishedAt="8 Jan 22"
                />
              </li>
            </ul>

            <MobileCarrousselContainer>
              <ul>
                <Swiper
                  slidesPerView={1.2}
                  spaceBetween={18}
                >
                  <li>
                    <SwiperSlide>
                      <EpisodeCard 
                        path="/episode/01" 
                        imageUrl="/card-image.png"
                        duration="1:35:18"
                        title="O que é um bom código?"
                        members="Diego e Richard"
                        publishedAt="8 Jan 22"
                      />
                    </SwiperSlide>
                  </li>

                  <li>
                    <SwiperSlide>
                      <EpisodeCard 
                        path="/episode/01" 
                        imageUrl="/card-image.png"
                        duration="1:35:18"
                        title="O que é um bom código?"
                        members="Diego e Richard"
                        publishedAt="8 Jan 22"
                      />
                    </SwiperSlide>
                  </li>

                  <li>
                    <SwiperSlide>
                      <EpisodeCard 
                        path="/episode/01" 
                        imageUrl="/card-image.png"
                        duration="1:35:18"
                        title="O que é um bom código?"
                        members="Diego e Richard"
                        publishedAt="8 Jan 22"
                      />
                    </SwiperSlide>
                  </li>

                  <li>
                    <SwiperSlide>
                      <EpisodeCard 
                        path="/episode/01" 
                        imageUrl="/card-image.png"
                        duration="1:35:18"
                        title="O que é um bom código?"
                        members="Diego e Richard"
                        publishedAt="8 Jan 22"
                      />
                    </SwiperSlide>
                  </li>
                </Swiper>
              </ul>
            </MobileCarrousselContainer>
          </LastReleasesContainer>

          <AllRealeasesTableContainer>
            <h2>Todos os lançamentos</h2>
             
            <Table episodes={episodes} />
          </AllRealeasesTableContainer>

          <Player />
        </HomeWrapper>
      </HomeContainer>
    </DefaultLayout>
  )
}

export default Home

export const getServerSideProps = withSSRPrivate(async ctx => {
  const apiClient = setupApiClient(ctx)

  const response = await apiClient.get<Episode[]>("/episodes")

  const episodes = response.data.map(episode => {
    return {
      id: episode.id,
      imageAndTitle: {
        imgUrl: episode.thumbnail,
        title: episode.title,
      },
      slug: episode.slug,
      members: episode.members,
      publishedAt: episode.publishedAt,
      duration: episode.duration.toString(),
      aplauses: episode.likes
    }
  })
  
  return {
    props: {
      episodes
    }
  }
})
