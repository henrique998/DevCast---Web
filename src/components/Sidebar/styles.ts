import Link from "next/link";
import styled, { css } from "styled-components";

export const SidebarContainer = styled.aside`
    width: 4.375rem;
    height: 100vh;
    overflow: hidden;
    border-right: 1px solid ${props => props.theme.gray200};

    .wrapper {
        position: relative;

        max-width: 7.5rem;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin-left: auto;
        margin-right: auto;

        > img {
            margin-top: 1.875rem;

            width: 7.375rem;
            height: 2rem;
        }

        nav {
            margin-top: 6.25rem;

            ul {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2.25rem;
            }
        }
    }

    @media (max-width: 414px) {
        display: none;
    }
`

interface NavLinkContainerProps {
    isActive: boolean
}

export const NavLinkContainer = styled(Link)<NavLinkContainerProps>`
    display: flex;
    align-items: center;
    gap: 0.625rem;

    color: ${props => props.isActive ? props.theme.purple : props.theme.gray300};

    transition: 0.2s;

    ${props => !props.isActive && css`
        &:hover {
            color: ${props.theme.purple};
        }
    `}

    ${props => props.isActive && css`
        &:hover {
            filter: brightness(0.9)
        }
    `}
`

export const LoggoutButton = styled.button`
    position: absolute;
    bottom: 1.875rem;

    display: flex;
    align-items: center;
    gap: 0.625rem;

    color: ${props => props.theme.gray300};

    span {
        font-size: 1.125rem;
        font-weight: 500;
    }

    transition: color 0.2s;

    &:hover {
        color: ${props => props.theme.purple};
    }
`