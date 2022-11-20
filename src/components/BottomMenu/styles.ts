import Link from "next/link"
import styled from "styled-components"

export const BottomMenuContainer = styled.nav`
    display: none;

    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;

    width: 100%;
    height: 4.375rem;

    background-color: ${props => props.theme.gray900};
    border-top: 1px solid ${props => props.theme.gray200};

    ul {
        max-width: 400px;
        width: 100%;
        height: 100%;

        margin-left: auto;
        margin-right: auto;

        padding: 0 1rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 414px) {
        display: block;
    }
`

interface MobileNavLinkContainerProps {
    isActive: boolean
}

export const MobileNavLinkContainer = styled(Link)<MobileNavLinkContainerProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: ${props => props.isActive ? props.theme.purple : props.theme.gray300};

    span {
        /* display: block; */
        font-size: 1.125rem;
        font-weight: 600;
    }
`