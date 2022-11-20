import { ReactNode } from "react";
import { BottomMenu } from "../components/BottomMenu";
import { Header } from "../components/Header";
import { MobilePlayer } from "../components/MobilePlayer";
import { Sidebar } from "../components/Sidebar";
import { DefaultLayoutContainer } from "./styles";

interface DefaultLayoutProps {
    children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
   return (
    <DefaultLayoutContainer>
        <Sidebar />

        <main>
            <Header />

            {children}

            <MobilePlayer />
            <BottomMenu />
        </main>
    </DefaultLayoutContainer>
   )
}