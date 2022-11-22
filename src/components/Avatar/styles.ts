import * as Avatar from '@radix-ui/react-avatar'
import styled, { css } from 'styled-components'

interface AvatarProps {
    size: 'sm' | 'md'
}

export const AvatarContainer = styled(Avatar.Root)<AvatarProps>`
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;

    ${props => props.size === "sm" && css`
        width: 2.25rem;
        height: 2.25rem;
    `}

    ${props => props.size === "md" && css`
        width: 6.25rem;
        height: 6.25rem;
    `}
`

export const AvatarFallback = styled(Avatar.Fallback)<AvatarProps>`
    border-radius: 50%;
    
    background-color: ${props => props.theme.gray300};

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 100%;
        height: 100%;
        border-radius: inherit;

        svg {
            color: ${props => props.theme.gray600};
        }
    }

    ${props => props.size === "sm" && css`
        width: 2.25rem;
        height: 2.25rem;

    `}

    ${props => props.size === "md" && css`
        width: 6.25rem;
        height: 6.25rem;

        border: 1px solid red !important;
    `}
`

export const AvatarImage = styled(Avatar.Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`