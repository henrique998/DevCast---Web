import styled from "styled-components"

export const HomeContainer = styled.section`
    height: calc(100vh - 4.375rem);
    overflow-y: auto;
`

export const HomeWrapper = styled.div`
    max-width: 58.125rem;
    margin: 0 auto;
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
`