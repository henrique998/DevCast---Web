import styled from "styled-components";

interface InputProps {
    hasError?: boolean
    hasIcon?: boolean
} 

export const InputContainer = styled.div<InputProps>`
    display: grid;
    gap: 0.5rem;

    .wrapper {
        height: calc(3.3rem - 1px);
        background-color: ${props => props.theme.gray200};
        border-radius: 6px;

        display: flex;
        align-items: center;
        gap: 0.625rem;

        border: 2.5px solid ${props => props.hasError ? props.theme.red : props.theme.gray300};
        transition: border-color .1s;
        
        &:focus-within {
            border-color: ${props => props.theme.purple};
        }
        
        svg {
            margin-left: ${props => props.hasIcon && '1rem'};
            color: ${props => props.theme.gray600};
        }
    }

    > span {
        color: ${props => props.hasError && props.theme.red};

        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`

export const InputElement = styled.input<InputProps>`
    width: 100%;
    height: 100%;

    border: 0;
    background: transparent;
    outline: none;

    padding-left: ${props => !props.hasIcon ? '1rem' : '0'};

    &::placeholder {
        color: ${props => props.theme.gray600};
    }
`