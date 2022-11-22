import Image from "next/image";
import { useRouter } from "next/router";
import { SlidersHorizontal } from "phosphor-react";
import { useAuth } from "../../contexts/AuthContext";
import { Avatar } from "./Avatar";
import { HeaderContainer, SettingsLink } from "./styles";

export function Header() {
  const { account } = useAuth()

  const router = useRouter()
  const isSettingsPage = router.pathname === "/settings" 

  return (
  <HeaderContainer>
    <Image 
      src="/Logo.svg"
      alt=""
      width={118}
      height={32}
      className="logo"
    />

    <span>Olá {account?.name}! vamos ouvir alguma coisa?</span>

    <div>
      <SettingsLink href="/settings" isActive={isSettingsPage}>
        <SlidersHorizontal 
          size={24} 
          weight="fill" 
        />
      </SettingsLink>

      <Avatar 
        src={account?.avatarUrl}
        alt={account?.avatarUrl ? "Sua foto" : "Ícone de um usuário"}
      />
    </div>
  </HeaderContainer>
  )
}