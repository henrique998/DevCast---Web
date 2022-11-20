import styled, { css } from "styled-components";

interface MobileMenuContainerProps {
    isOpen: boolean
}

export const MobileMenuContainer = styled.nav<MobileMenuContainerProps>`
    display: none;

    position: fixed;
    top: 0;
    left: -100%;
    bottom: 0;
    z-index: 200;

    transition: left 100ms;

    ${props => props.isOpen && css`
        left: 0;
    `}

    background-color: ${props => props.theme.gray900};

    width: 100%;
    height: 100vh;

    header {
        height: 4.375rem;

        .container {
            height: 100%;
            max-width: 392px;

            margin-left: auto;
            margin-right: auto;
            
            padding: 0 1rem;

            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .buttons-container {
        max-width: 392px;
        width: 100%;
        height: 100%;

        padding: 0 1rem;

        margin-left: auto;
        margin-right: auto;

        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;

        

        a {
            height: 3rem;
        }
    }

    @media (max-width: 414px) {
        display: block;
    }
`