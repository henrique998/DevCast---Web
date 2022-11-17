import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { SlidersHorizontal } from "phosphor-react";
import { Avatar } from "./Avatar";
import { HeaderContainer, SettingsLink } from "./styles";

export function Header() {
  const router = useRouter()
  const isSettingsPage = router.pathname === "/settings" 

  return (
  <HeaderContainer>
    <span>Olá henrique! vamos ouvir alguma coisa?</span>

    <div>
      <SettingsLink href="/settings" isActive={isSettingsPage}>
        <SlidersHorizontal 
          size={24} 
          weight="fill" 
        />
      </SettingsLink>

      <Avatar 
        src="/man.png"
        alt=""
      />
    </div>
  </HeaderContainer>
  )
}