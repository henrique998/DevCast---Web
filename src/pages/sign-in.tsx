import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

import { Button } from "../components/Button"
import { ButtonLink } from "../components/ButtonLink"
import { GithubLogo } from "../custom-icons/GithubLogo"
import { Input } from "../components/Input"
import { InputGroup } from "../components/InputGroup"
import { Separator } from "../components/Separator"

import { 
  BrandContainer, 
  CopyrightMessage, 
  LoginContainer, 
  Message, 
  SignInContainer 
} from "../styles/pages/sign-in"
import { useAuth } from "../contexts/AuthContext"
import { githubAuthUrl } from "../utils/githubAuthUrl"

const signInFormValidationSchema = zod.object({
  email: zod.string().min(1, "Campo obrigatório").email("Digite um e-mail válido"),
  password: zod.string().min(1, "Campo obrigatório")
})

type SignInFormData = zod.infer<typeof signInFormValidationSchema>

function SignIn() {
  const { signIn } = useAuth()

  const { register, handleSubmit, formState, reset } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormValidationSchema)
  })

  async function handleSignIn(data: SignInFormData) {
    await signIn(data)

    reset()
  }

  const { errors } = formState

  const emailInputError = errors.email?.message
  const passwordInputError = errors.password?.message

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
            label="Entrar com github"
            icon={<GithubLogo />}
            path={githubAuthUrl}
          />
        </header>

        <Separator label="Ou" />

        <form onSubmit={handleSubmit(handleSignIn)}>
          <InputGroup>
              <label htmlFor="email">E-mail</label>

              <Input 
                type="email"
                placeholder="jhondoe@email.com"
                id="email"
                error={emailInputError}
                {...register("email")}
              />
          </InputGroup>

          <InputGroup>
              <label htmlFor="password">Senha</label>

              <Input 
                type="password"
                placeholder="****************"
                id="password"
                error={passwordInputError}
                {...register("password")}
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
