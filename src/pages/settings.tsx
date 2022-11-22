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
import { Avatar } from "../components/Avatar"

const updateProfileDataFormValidationSchema = zod.object({
    name: zod.string(),
    email: zod.string()
  })
  
type UpdateProfileDataFormData = zod.infer<typeof updateProfileDataFormValidationSchema>

interface IAxiosResponse {
    name: string
    email: string
}

function Settings() {
    const { account, setAccount } = useAuth()

    const { register, handleSubmit } = useForm<UpdateProfileDataFormData>({
        resolver: zodResolver(updateProfileDataFormValidationSchema),
        defaultValues: {
            name: account?.name,
            email: account?.email
        }
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
        try {
            const response = await api.put<IAxiosResponse>("/accounts/update", {
                name: data.name.trim(),
                email: data.email.trim(),
            })

            setAccount({
                ...account,
                name: response.data.name,
                email: response.data.email
            })

            toast.custom(() => (
                <Toast 
                    title="Dados atualizados com sucesso"
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

    async function handleDeleteAvatar() {
        if (!account.avatarUrl) {
            return;
        }

        try {
            await api.delete("/accounts/delete/avatar")

            setAccount({
                ...account,
                avatarUrl: null
            })

            toast.custom(() => (
                <Toast 
                    title="Avatar deletado com sucesso"
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

    return (
        <DefaultLayout>
            <SettingsContainer>
                <h1>
                    <strong>Edite</strong> suas informações pessoais <br /> 
                    caso deseje
                </h1>

                <div>
                    <Avatar 
                        src={account?.avatarUrl ?? ""}
                        alt="sua foto de avatar"
                        size="md"
                    />

                    <input 
                        type="file" 
                        id="image" 
                        hidden 
                        onChange={handleUpdateAvatar}
                    />

                    <label htmlFor="image">Enviar nova imagem</label>

                    <button onClick={handleDeleteAvatar}>Excluir</button>
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
                            {...register('name')}
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
                            {...register('email')}
                        />
                    </InputGroup>

                    <Button label="Atualizar" />
                </Form>
            </SettingsContainer>
        </DefaultLayout>
    )
}

export default Settings
