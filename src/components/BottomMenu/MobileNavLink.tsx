import { useRouter } from "next/router";
import { ReactElement, ReactSVG } from "react";
import { MobileNavLinkContainer } from "./styles";

interface MobileNavLinkProps {
    path: string
    label: string
    icon: ReactElement<ReactSVG>
}

export function MobileNavLink({ path, icon, label }: MobileNavLinkProps) {
   const router = useRouter()

   const isActive = router.pathname === path

   return (
    <MobileNavLinkContainer href={path} isActive={isActive}>
        {icon} {isActive && <span>{label}</span>} 
    </MobileNavLinkContainer> 
   )
}