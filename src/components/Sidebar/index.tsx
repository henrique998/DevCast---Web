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
          src="/Microphone.svg"
          alt=""
          width={354}
          height={96}
        />

        <nav>
          <ul>
            <li>
              <NavLink 
                path="/home"
                icon={<House size={26} weight="fill" />}
              />
            </li>

            <li>
              <NavLink 
                path="/discover"
                icon={<Compass size={26} weight="fill" />}
              />
            </li>

            <li>
              <NavLink 
                path="/favorites"
                icon={<Star size={26} weight="fill" />}
              />
            </li>

            <li>
              <NavLink 
                path="/playlists"
                icon={<Queue size={26} weight="fill" />}
              />
            </li>
          </ul>
        </nav>

        <LoggoutButton onClick={signOut}>
          <Power size={26} weight="bold" />
        </LoggoutButton>
      </div>
    </SidebarContainer>
  )
}