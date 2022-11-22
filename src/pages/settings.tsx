import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { InputGroup } from "../components/InputGroup"

import { DefaultLayout } from "../layouts/DefaultLayout"

import { Form, SettingsContainer } from "../styles/pages/settings"
import { ChangeEvent } from "react"
import { api } from "../services/apiClient"
import toast from "react-hot-toast"
import { Toast } from "../components/Toast"
import { useAuth } from "../contexts/AuthContext"

const updateProfileDataFormValidationSchema = zod.object({
    email: zod.string().min(1, "Campo obrigatório").email("Digite um e-mail válido"),
    password: zod.string().min(1, "Campo obrigatório")
  })
  
type UpdateProfileDataFormData = zod.infer<typeof updateProfileDataFormValidationSchema>

function Settings() {
    const { account, setAccount } = useAuth()

    const { register, handleSubmit, formState, reset } = useForm<UpdateProfileDataFormData>({
        resolver: zodResolver(updateProfileDataFormValidationSchema)
    })

    async function handleUpdateAvatar(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            return;
        }

        const formData = new FormData()

        formData.append("avatar", e.target.files[0])

        try {
            const response = await api.patch("/accounts/update/avatar", formData)

            setAccount({
                ...account,
                avatarUrl: response.data.newAvatarUrl
            })

            toast.custom(() => (
                <Toast 
                    title="Avatar atualizado com sucesso"
                    description=""
                />
            ), {
                position: 'top-right'
            })
        } catch (error) {
            toast.custom(() => (
                <Toast 
                    title="Error"
                    description={error.message}
                />
            ), {
                position: 'top-right'
            })
        }
    }

    async function handleUpdateProfile(data: UpdateProfileDataFormData) {
        console.log(data)
    }

    return (
        <DefaultLayout>
        <SettingsContainer>
            <h1>
                <strong>Edite</strong> suas informações pessoais <br /> 
                caso deseje
            </h1>

            <div>
                <Image 
                    src={account?.avatarUrl ?? ""}
                    alt="sua foto de avatar"
                    width={300} 
                    height={300} 
                />

                <input 
                    type="file" 
                    id="image" 
                    hidden 
                    onChange={handleUpdateAvatar}
                />

                <label htmlFor="image">Enviar nova imagem</label>

                <button>Excluir</button>
            </div>

            <Form onSubmit={handleSubmit(handleUpdateProfile)}>
                <InputGroup>
                    <label htmlFor="name">
                        Nome<strong>*</strong>
                    </label>

                    <Input 
                        id="name"
                        type="text" 
                        placeholder="Jhon doe" 
                        value="Henrique" 
                    />
                </InputGroup>

                <InputGroup>
                    <label htmlFor="email">
                        E-mail<strong>*</strong>
                    </label>

                    <Input 
                        id="email"
                        type="email" 
                        placeholder="Jjhondoe@email.com" 
                        value="henriquemonteiro037@gmail.com" 
                    />
                </InputGroup>

                <Button label="Atualizar" />
            </Form>
        </SettingsContainer>
        </DefaultLayout>
    )
}

export default Settings
