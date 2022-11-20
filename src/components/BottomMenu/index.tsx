import { Compass, House, Queue, Star } from "phosphor-react";
import { MobileNavLink } from "./MobileNavLink";
import { BottomMenuContainer } from "./styles";

export function BottomMenu() {
   return (
    <BottomMenuContainer>
        <ul>
            <li>
                <MobileNavLink 
                    path="/home"
                    icon={<House size={32} weight="fill" />}
                    label="Home"
                />
            </li>

            <li>
                <MobileNavLink 
                    path="/discover"
                    label="Descobrir"
                    icon={<Compass size={32} weight="fill" />}
                />
            </li>

            <li>
                <MobileNavLink 
                    path="/favorites"
                    label="Favoritos"
                    icon={<Star size={32} weight="fill" />}
                />
            </li>

            <li>
                <MobileNavLink 
                    path="/playlists"
                    label="Playlists"
                    icon={<Queue size={32} weight="fill" />}
                />
            </li>
        </ul>
    </BottomMenuContainer>
   )
}