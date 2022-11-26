import { ReactNode } from "react";
import { useContextSelector } from "use-context-selector";
import { BottomMenu } from "../components/BottomMenu";
import { Header } from "../components/Header";
import { MobilePlayer } from "../components/MobilePlayer";
import { Player } from "../components/Player";
import { Sidebar } from "../components/Sidebar";
import { PlayerContext } from "../contexts/PlayerContext";
import { DefaultLayoutContainer } from "./styles";

interface DefaultLayoutProps {
    children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
    const episodePlaying = useContextSelector(PlayerContext, ctx => {
        return ctx.episodePlaying
    }) 

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