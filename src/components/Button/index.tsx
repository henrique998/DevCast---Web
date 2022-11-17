import { ComponentProps } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
    label: string
    variant?: 'filled' | 'outlined'
}

export function Button({ label, variant = "filled", ...rest }: ButtonProps) {
   return (
    <ButtonContainer variant={variant} {...rest}>
        {label}
    </ButtonContainer>
   )
}