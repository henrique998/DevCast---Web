import * as Avatar from '@radix-ui/react-avatar'
import Link from 'next/link';

import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    height: 4.375rem;
    border-bottom: 1px solid ${props => props.theme.gray200};
    background-color: ${props => props.theme.gray900};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1.875rem;

    .logo {
        display: none;
    }

    span {
        display: block;
        color: ${props => props.theme.gray600};

        font-size: 0.875rem;
        font-weight: 500;
    }

    div {
        display: flex;
        align-items: center;
        gap: 1.25rem;

        img {
            width: 2.25rem;
            height: 2.25rem;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    @media (max-width: 414px) {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 100;

        width: 100%;

        padding: 0 1.375rem;

        > span {
            display: none;
        }

        > .logo {
            display: block;
        }
    }
`

interface SettingsLinkProps {
    isActive: boolean
}

export const SettingsLink = styled(Link)<SettingsLinkProps>`
    color: ${props => props.theme.gray600};

    transition: 0.2s;

    ${props => !props.isActive && css`
        &:hover {
            color: ${props => props.theme.purple};
        }
    `}

    ${props => props.isActive && css`
        color: ${props => props.theme.purple};

        &:hover {
            filter: brightness(0.9); 
        }
    `}
`

export const AvatarContainer = styled(Avatar.Root)`
    display: inline-block;
    border-radius: 50%;
    width: 2.25rem;
    height: 2.25rem;
    overflow: hidden;
`

export const AvatarFallback = styled(Avatar.Fallback)`
    width: 2.25rem;
    height: 2.25rem;
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
`

export const AvatarImage = styled(Avatar.Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`