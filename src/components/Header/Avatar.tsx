import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar({ ...rest }: AvatarProps) {
   return (
    <AvatarContainer>
      <AvatarImage {...rest} />

      <AvatarFallback delayMs={600}>
        <div>
          <User size={24} />
        </div>
      </AvatarFallback>
    </AvatarContainer>
   )
}