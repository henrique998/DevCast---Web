import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/Button"

import { ButtonLink } from "../components/ButtonLink"
import { DiscordLogo } from "../custom-icons/DiscordLogo"
import { Input } from "../components/Input"
import { InputGroup } from "../components/InputGroup"
import { Separator } from "../components/Separator"
import { BrandContainer, CopyrightMessage, LoginContainer, Message, SignInContainer } from "../styles/pages/sign-in"

function SignIn() {
  return (
    <SignInContainer>
      <LoginContainer>
        <header>
            <h1>Login</h1>

            <p>
                Entre e comece a ouvir as melhores conversas 
                sobre javascript, node, typescript, etc.
            </p>

            <ButtonLink 
                label="Entrar com discord"
                icon={<DiscordLogo />}
                path="/sjdjshdjshdjshd"
            />
        </header>

        <Separator />

        <form>
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
          Não possui uma conta ainda? 
          <Link href="/sign-up">Crie uma conta</Link>
        </Message>

        <CopyrightMessage>
          &copy; 2022 devcast. All rights reserved
        </CopyrightMessage>
      </LoginContainer>

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
    </SignInContainer>
  )
}

export default SignIn
