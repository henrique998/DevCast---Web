import styled, { css } from "styled-components"

interface PlayButtonContainerProps {
    variant: 'filled' | 'outlined'
}

export const PlayButtonContainer = styled.button<PlayButtonContainerProps>`
    max-width: 5.625rem;
    width: 100%;
    height: 1.5rem;
    border-radius: 50%;

    transition: 0.2s;

    ${props => props.variant === "filled" && css`
        svg {
            color: ${props.theme.purple};
            /* border-radius: 50%; */
        }

        &:hover {
            filter: brightness(0.85);
        }
    `}

    ${props => props.variant === "outlined" && css`
        /* background-color: transparent; */
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        
        .icon-container {
            width: 1.75rem;
            height: 1.75rem;
            border-radius: 50%;
            
            display: flex;
            align-items: center;
            justify-content: center;

            border: 2.5px solid ${props.theme.purple};
            
            svg {
                display: block;
                color: ${props.theme.purple};
            }
        }

        span {
            display: block;

            color: ${props.theme.purple};

            font-weight: 500;
        }

        &:hover {
            filter: brightness(0.85);
        }
    `}
`