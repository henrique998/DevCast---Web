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
  RegisterContainer, 
  Message, 
  SignUpContainer 
} from "../styles/pages/sign-up"
import { githubAuthUrl } from "../utils/githubAuthUrl"
import { useAuth } from "../contexts/AuthContext"

const signUpFormValidationSchema = zod.object({
  name: zod.string().min(1, "Campo obrigatório"),
  email: zod.string().min(1, "Campo obrigatório").email("Digite um e-mail válido"),
  password: zod.string().min(1, "Campo obrigatório")
})

type SignUpFormData = zod.infer<typeof signUpFormValidationSchema>

function SignUp() {
  const { signUp } = useAuth()

  const { register, handleSubmit, formState } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormValidationSchema)
  })

  async function handleSignUp(data: SignUpFormData) {
    await signUp(data)
  }

  const { errors } = formState

  const nameInputError = errors.name?.message
  const emailInputError = errors.email?.message
  const passwordInputError = errors.password?.message

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
            label="Criar conta com github"
            icon={<GithubLogo />}
            path={githubAuthUrl}
          />
        </header>

        <Separator label="Ou" />

        <form onSubmit={handleSubmit(handleSignUp)}>
          <InputGroup>
              <label htmlFor="name">Nome</label>

              <Input 
                type="text"
                placeholder="Jhon doe"
                id="name"
                error={nameInputError}
                {...register("name")}
              />
          </InputGroup>

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

          <Button label="Criar conta" />
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
