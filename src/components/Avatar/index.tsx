import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size?: 'sm' | 'md'
}

export function Avatar({ size = "sm", ...rest }: AvatarProps) {
   return (
    <AvatarContainer size={size}>
      <AvatarImage {...rest} />

      <AvatarFallback delayMs={600} size={size}>
        <div>
          <User size={size === "sm" ? 24 : 32} />
        </div>
      </AvatarFallback>
    </AvatarContainer>
   )
}