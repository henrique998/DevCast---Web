import styled from "styled-components"

export const EpisodeContainer = styled.div`
    height: calc(100vh - 4.375rem);
    overflow-y: auto;
`

export const EpisodeWrapper = styled.div`
    max-width: 58.125rem;

    margin: 0 auto;
    padding-bottom: 3.125rem;

    img {
        margin-top: 3.125rem;

        object-fit: cover;

        border-radius: 8px;
    }
`

export const EpisodeHeading = styled.header`
    .title-container {
        margin-top: 1.5rem;

        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        h1 {
            max-width: 42.75rem;
            width: 100%;

            text-align: left;

            font-size: 600;
        }
    }

    .infos-container {
        margin-top: 1.5rem;

        display: flex;
        align-items: center;
        gap: 1rem;

        .info {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            color: ${props => props.theme.gray600};

            svg {
                color: ${props => props.theme.gray300};
            }
        }

        .bullet {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: ${props => props.theme.gray600};
        }
    }

    .content {
        margin-top: 1.5rem;

        color: ${props => props.theme.gray600};
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`