import styled from "styled-components"

export const DiscoverContainer = styled.section`
    height: calc(100vh - 4.375rem);
    overflow-y: auto;
`  

export const DiscoverWrapper = styled.div`
    max-width: 58.125rem;

    margin: 0 auto;
    padding-bottom: 3.125rem;

    header {
        margin-top: 3.125rem;

        text-align: center;

        h1 {
            font-size: 2rem;
            font-weight: 600;

            color: ${props => props.theme.gray100};

            strong {
                color: ${props => props.theme.purple};
            }
        }

        p {
            margin-top: 1rem;
            color: ${props => props.theme.gray600};
        }
    }

    ul {
        margin-top: 5rem;

        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2.5rem;
    }
`