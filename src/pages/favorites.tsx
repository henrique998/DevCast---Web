import { EpisodeCard } from "../components/EpisodeCard"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { FavoritesContainer, FavoritesWrapper } from "../styles/pages/favorites"

function Favorites() {
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
        </FavoritesWrapper>
      </FavoritesContainer>
    </DefaultLayout>
  )
}

export default Favorites
