import { ComponentProps, ReactElement, ReactSVG } from "react";
import { ButtonLinkContainer } from "./styles";

interface ButtonLinkProps {
    label: string
    icon?: ReactElement<ReactSVG>
    variant?: 'filled' | 'outlined'
    path: string
}

export function ButtonLink({ label, icon, variant = "filled", path }: ButtonLinkProps) {
   return (
    <ButtonLinkContainer 
        href={path} 
        variant={variant} 
    >
        {icon} {label}
    </ButtonLinkContainer>
   )
}