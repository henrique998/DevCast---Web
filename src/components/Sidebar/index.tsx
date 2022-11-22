import Image from "next/image";
import { useRouter } from "next/router";
import { Compass, House, Power, Queue, Star } from "phosphor-react";
import { useAuth } from "../../contexts/AuthContext";
import { NavLink } from "./NavLink";
import { LoggoutButton, SidebarContainer } from "./styles";

export function Sidebar() {
  const { signOut } = useAuth()

  const router = useRouter()
  const isSettingsPage = router.pathname === "/settings"

  return (
    <SidebarContainer>
      <div className="wrapper">
        <Image 
          src="/Logo.svg"
          alt=""
          width={354}
          height={96}
        />

        <nav>
          <ul>
            <li>
              <NavLink 
                path="/home"
                label="Home"
                icon={<House size={24} weight="fill" />}
              />
            </li>

            <li>
              <NavLink 
                path="/discover"
                label="Descobrir"
                icon={<Compass size={24} weight="fill" />}
              />
            </li>

            <li>
              <NavLink 
                path="/favorites"
                label="Favoritos"
                icon={<Star size={24} weight="fill" />}
              />
            </li>

            <li>
              <NavLink 
                path="/playlists"
                label="Playlists"
                icon={<Queue size={24} weight="fill" />}
              />
            </li>
          </ul>
        </nav>

        <LoggoutButton onClick={signOut}>
          <Power size={24} weight="bold" />

          <span>Sair</span>
        </LoggoutButton>
      </div>
    </SidebarContainer>
  )
}