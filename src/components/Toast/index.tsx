import { Check, X } from "phosphor-react"
import { ToastCheck, ToastContainer, ToastDescription, ToastTitle, } from "./styles"

interface ToastProps {
    title: string
    description: string
}

export function Toast({ title, description }: ToastProps) {
   return (
    <ToastContainer>
        <header>
            <ToastTitle>{title}</ToastTitle>

            <ToastCheck>
                <Check size={12} weight="fill" />
            </ToastCheck>
        </header>

        <ToastDescription>
            {description}
        </ToastDescription>
    </ToastContainer>
   )
}