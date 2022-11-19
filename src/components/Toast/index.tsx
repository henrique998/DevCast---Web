import { X } from "phosphor-react"
import { ToastClose, ToastContainer, ToastDescription, ToastTitle, ToastViewport } from "./styles"

interface ToastProps {
    title: string
    description: string
    isOpen: boolean
    onOpenChange: (isOpen: boolean) => void
}

export function Toast({ title, description, isOpen, onOpenChange }: ToastProps) {
   return (
    <>
        <ToastContainer open={isOpen} onOpenChange={onOpenChange}>
            <header>
                <ToastTitle>{title}</ToastTitle>

                <ToastClose altText="Fechar toast">
                    <X size={12} />
                </ToastClose>
            </header>

            <ToastDescription>
                {description}
                </ToastDescription>
        </ToastContainer>

        <ToastViewport />
    </>
   )
}