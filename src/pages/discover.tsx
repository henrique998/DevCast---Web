import { EpisodeCard } from "../components/EpisodeCard"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { DiscoverContainer, DiscoverWrapper } from "../styles/pages/discover"

function Discover() {
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
        </DiscoverWrapper>
      </DiscoverContainer>
    </DefaultLayout>
  )
}

export default Discover
