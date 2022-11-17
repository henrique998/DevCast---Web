import { EpisodeCard } from "../components/EpisodeCard"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { HomeContainer, HomeWrapper, LastReleasesContainer } from "../styles/pages/home"

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
        </HomeWrapper>
      </HomeContainer>
    </DefaultLayout>
  )
}

export default Home
