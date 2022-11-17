import { Play } from "phosphor-react";
import { ComponentProps } from "react";
import { PlayButtonContainer } from "./styles";

interface PlayButtonProps extends ComponentProps<typeof PlayButtonContainer> {
    variant?: 'filled' | 'outlined'
}

export function PlayButton({ variant = "filled", ...rest }: PlayButtonProps) {
   return (
    <PlayButtonContainer {...rest} variant={variant}>
        <Play size={14} weight="fill" />
    </PlayButtonContainer>
   )
}