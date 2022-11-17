import styled, { css } from "styled-components"

interface PlayButtonContainerProps {
    variant: 'filled' | 'outlined'
}

export const PlayButtonContainer = styled.button<PlayButtonContainerProps>`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    transition: 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.variant === "filled" && css`
        background-color: ${props.theme.purple};

        svg {
            color: ${props.theme.gray100};
        }

        &:hover {
            filter: brightness(0.85);
        }
    `}

    ${props => props.variant === "outlined" && css`
        background-color: transparent;
        border: 3px solid ${props.theme.purple};

        svg {
            color: ${props.theme.purple};
        }

        &:hover {
            filter: brightness(0.85);
        }
    `}
`