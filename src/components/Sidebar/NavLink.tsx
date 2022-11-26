import { useRouter } from "next/router"
import { ReactElement, ReactSVG } from "react"
import { NavLinkContainer } from "./styles"

interface NavLinkProps {
    path: string
    icon: ReactElement<ReactSVG>
}

export function NavLink({ path, icon }: NavLinkProps) {
    const router = useRouter()

    const isActive = router.pathname === path

   return (
    <NavLinkContainer href={path} isActive={isActive}>
        {icon}
    </NavLinkContainer>
   )
}