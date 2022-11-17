import Link from "next/link";
import styled, { css } from "styled-components";

interface ButtonContainerProps {
    variant: 'filled' | 'outlined'
}

export const ButtonLinkContainer = styled(Link)<ButtonContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    width: 100%;
    height: 2.375rem;
    padding: 0 0.875rem;

    border-radius: 6px;

    font-size: 0.875rem;

    svg {
        width: 1.875rem;
    }

    ${props => props.variant === "filled" && css`
        background-color: ${props.theme.purple};
        color: ${props.theme.gray100};

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    `}

    ${props => props.variant === "outlined" && css`
        background-color: transparent;
        color: ${props.theme.purple};
        border: 1px solid ${props.theme.purple};

        transition: background-color 0.2s;

        &:hover {
            background-color: ${props => props.theme.purple};
            color: ${props => props.theme.gray100};
        }
    `}
`