import { ReactNode } from "react";
import { BottomMenu } from "../components/BottomMenu";
import { Header } from "../components/Header";
import { MobilePlayer } from "../components/MobilePlayer";
import { Player } from "../components/Player";
import { Sidebar } from "../components/Sidebar";
import { usePlayer } from "../contexts/PlayerContext";
import { DefaultLayoutContainer } from "./styles";

interface DefaultLayoutProps {
    children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
    const { episodePlaying } = usePlayer()

   return (
    <DefaultLayoutContainer>
        <Sidebar />

        <main>
            <Header />

            {children}

            {episodePlaying && <MobilePlayer />}
            <BottomMenu />
        </main>

        <Player />
    </DefaultLayoutContainer>
   )
}