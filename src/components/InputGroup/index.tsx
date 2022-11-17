import { ReactNode } from "react"
import { InputGroupContainer } from "./styles"

interface InputGroupProps {
    children: ReactNode
}

export function InputGroup({ children }: InputGroupProps) {
   return (
    <InputGroupContainer>
        {children}
    </InputGroupContainer>
   )
}