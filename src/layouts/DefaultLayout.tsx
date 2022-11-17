import { ReactNode } from "react";
import { Header } from "../components/Header";
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
        </main>
    </DefaultLayoutContainer>
   )
}