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

function Home() {
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
                  slidesPerView={1.75}
                  spaceBetween={24}
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
             
            <Table episodes={tableData} />
          </AllRealeasesTableContainer>

          <Player />
        </HomeWrapper>
      </HomeContainer>
    </DefaultLayout>
  )
}

export default Home
