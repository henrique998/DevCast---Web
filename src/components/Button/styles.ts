import styled, { css } from "styled-components";

interface ButtonContainerProps {
    variant: 'filled' | 'outlined'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
    height: 3.125rem;
    padding: 0 1rem;

    border-radius: 6px;

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