import Image from "next/image"
import { X } from "phosphor-react"
import { ButtonLink } from "../ButtonLink"

import { MobileMenuContainer } from "./styles"

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <MobileMenuContainer isOpen={isOpen}>
      <header>
        <div className="container">
          <Image
            src="/Logo.svg"
            alt=""
            width={118}
            height={32}
          />

          <button onClick={onClose}>
            <X size={28} weight="fill" />
          </button>
        </div>
      </header>

      <div className="buttons-container">
        <ButtonLink 
          label="Entrar" 
          path="/sign-in" 
        />

        <ButtonLink 
          label="Criar conta" 
          path="/sign-up" 
          variant="outlined" 
        />
      </div>
    </MobileMenuContainer>
  )
}