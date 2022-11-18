import { Play } from "phosphor-react";
import { ComponentProps } from "react";
import { PlayButtonContainer } from "./styles";

interface PlayButtonProps extends ComponentProps<typeof PlayButtonContainer> {
    variant?: 'filled' | 'outlined'
    label?: string
}

export function PlayButton({ variant = "filled", label, ...rest }: PlayButtonProps) {
   return (
    <PlayButtonContainer {...rest} variant={variant}>
        <div className="icon-container">
            <Play size={14} weight="fill" />
        </div>

        <span>{label}</span>
    </PlayButtonContainer>
   )
}