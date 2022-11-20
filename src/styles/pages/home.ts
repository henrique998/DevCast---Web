import styled from "styled-components"
import { Swiper } from "swiper/react"

export const HomeContainer = styled.section`
    height: calc(100vh - 4.375rem);
    overflow-y: auto;
`

export const HomeWrapper = styled.div`
    max-width: 58.125rem;
    margin: 0 auto;

    padding-bottom: 3.125rem;

    @media (max-width: 414px) {
        padding: 1rem;
    }
`

export const LastReleasesContainer = styled.div`
    margin-top: 3.125rem;

    h2 {
        font-size: 1.25rem;
        font-weight: 600;

        color: ${props => props.theme.gray600};
    }

    ul {
        margin-top: 1.875rem;

        display: flex;
        align-items: center;
        gap: 2.5rem;
    }

    @media (max-width: 414px) {
        max-width: 400px;
        padding: 0 1rem;

        > ul {
            display: none;
        }
    }
`

export const MobileCarrousselContainer = styled.div`
    display: none;

    @media (max-width: 414px) {
        display: block;
    }
`

export const AllRealeasesTableContainer = styled.div`
    margin-top: 2.5rem;

    h2 {
        margin-bottom: 1.875rem;

        font-size: 1.25rem;
        font-weight: 600;

        color: ${props => props.theme.gray600};
    }

    @media (max-width: 414px) {
        max-width: 400px;
        padding: 0 1rem;
    }
`