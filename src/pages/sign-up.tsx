import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/Button"

import { ButtonLink } from "../components/ButtonLink"
import { DiscordLogo } from "../custom-icons/DiscordLogo"
import { Input } from "../components/Input"
import { InputGroup } from "../components/InputGroup"
import { Separator } from "../components/Separator"
import { 
  BrandContainer, 
  CopyrightMessage, 
  RegisterContainer, 
  Message, 
  SignUpContainer 
} from "../styles/pages/sign-up"

function SignUp() {
  return (
    <SignUpContainer>
      <BrandContainer>
        <div>
            <Image 
                src="/white-logo.svg"
                alt=""
                width={480}
                height={144}
            />

            <h2>Episódios novos toda semana</h2>

            <span>fique por dentro das últimas novidades do universo da programação</span>
        </div>
      </BrandContainer>

      <RegisterContainer>
        <header>
            <h1>Cadastro</h1>

            <p>Cadastre-se e acesse todo o nosso conteúdo</p>

            <ButtonLink 
                label="Criar conta com discord"
                icon={<DiscordLogo />}
                path="/sjdjshdjshdjshd"
            />
        </header>

        <Separator label="Ou" />

        <form>
            <InputGroup>
                <label htmlFor="name">Nome</label>

                <Input 
                  type="text"
                  placeholder="Jhon doe"
                  id="name"
                />
            </InputGroup>

            <InputGroup>
                <label htmlFor="email">E-mail</label>

                <Input 
                  type="email"
                  placeholder="jhondoe@email.com"
                  id="email"
                />
            </InputGroup>

            <InputGroup>
                <label htmlFor="password">Senha</label>

                <Input 
                  type="password"
                  placeholder="****************"
                  id="email"
                />
            </InputGroup>

            <Button label="Entrar" />
        </form>

        <Message>
          Já possui uma conta? 
          <Link href="/sign-in">Entre agora</Link>
        </Message>

        <CopyrightMessage>
          &copy; 2022 devcast. All rights reserved
        </CopyrightMessage>
      </RegisterContainer>
    </SignUpContainer>
  )
}

export default SignUp
