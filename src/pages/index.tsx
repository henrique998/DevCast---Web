import Image from "next/image"
import { Envelope } from "phosphor-react"
import { Button } from "../components/Button"
import { ButtonLink } from "../components/ButtonLink"
import { Input } from "../components/Input"
import { HomeContainer, HomeHeader, TextsContainer, UsersCountContainer } from "../styles/pages/home"

function Landing() {
  return (
    <HomeContainer>
      <HomeHeader>
        <div className="container">
          <Image
            src="/Logo.svg"
            alt=""
            width={118}
            height={32}
          />

          <div>
            <ButtonLink 
              label="Entrar" 
              variant="filled"
              path="/sign-in"
            />

            <ButtonLink 
              label="Criar conta" 
              variant="outlined"
              path="/sign-up" 
            />
          </div>
        </div>
      </HomeHeader>

      <section>
        <TextsContainer>
          <h1>
            Ouça agora mesmo 
            os melhores <strong>podcasts</strong> sobre 
            o universo da programação
          </h1>

          <p>
            Abordamos diversos temas referentes ao universo da programação, 
            como javascript, node.js, react e muito mais. crie uma conta 
            agora e comece a ouvir 
          </p>

          <span>
            Inscreva-se na nossa newsletter e seja avisado quando publicarmos 
            um novo episódio.
          </span>

          <form>
            <Input 
              type="email"
              icon={<Envelope size={24} />}
              placeholder="Digite o seu e-mail" 
              className="input"
              // error="input"
            />

            <Button 
              type="submit"
              label="Inscrever-se"
            />
          </form>

          <UsersCountContainer>
            <div className="images">
              <Image
                src="/man.png"
                alt=""
                width={150}
                height={150}
              />

              <Image
                src="/man.png"
                alt=""
                width={150}
                height={150}
              />

              <Image
                src="/man.png"
                alt=""
                width={150}
                height={150}
              />

              <Image
                src="/man.png"
                alt=""
                width={150}
                height={150}
              />
            </div>

            <span>
              <strong>+536</strong> 
              pessoas consomem o nosso conteúdo
            </span>
          </UsersCountContainer>
        </TextsContainer>

        <Image
          src="/heroImage.png"
          alt=""
          width={16150}
          height={1680}
        />  
      </section>        
    </HomeContainer>
  )
}

export default Landing
