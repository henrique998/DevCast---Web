import Image from "next/image"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { InputGroup } from "../components/InputGroup"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { Form, SettingsContainer } from "../styles/pages/settings"

function Settings() {
  return (
    <DefaultLayout>
      <SettingsContainer>
        <h1>
            <strong>Edite</strong> suas informações pessoais <br /> 
            caso deseje
        </h1>

        <div>
            <Image 
                src="/man.png"
                alt=""
                width={300} 
                height={300} 
            />

            <input 
                type="file" 
                id="image" 
                hidden 
            />

            <label htmlFor="image">Enviar nova imagem</label>

            <button>Excluir</button>
        </div>

        <Form>
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
