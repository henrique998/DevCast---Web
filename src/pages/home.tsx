import { EpisodeCard } from "../components/EpisodeCard"
import { Player } from "../components/Player"
import { Table } from "../components/Table"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { AllRealeasesTableContainer, HomeContainer, HomeWrapper, LastReleasesContainer } from "../styles/pages/home"
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
