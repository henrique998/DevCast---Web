import { SeparatorContainer, SeparatorIndicator } from "./styles";

interface SeparatorProps {
    label: string
}

export function Separator({ label }: SeparatorProps) {
   return (
    <SeparatorContainer>
        <SeparatorIndicator /> {label} <SeparatorIndicator />
    </SeparatorContainer>
   )
}