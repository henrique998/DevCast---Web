import styled from "styled-components"

export const PlaylistsContainer = styled.section`
    height: calc(100vh - 4.375rem);
    overflow-y: auto;
`

export const PlaylistsWrapper = styled.div`
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

export const AddButton = styled.button`
    margin-top: 5rem;
    margin-left: auto;

    display: flex;
    align-items: center;
    gap: 0.625rem;

    color: ${props => props.theme.gray300};

    span {
        font-size: 0.875rem;
        font-weight: 500;
    }

    transition: color 0.2s;

    &:hover {
        color: ${props => props.theme.purple};
    }
`

export const ProfilePlaylistsContainer = styled.div`
    margin-top: 2.5rem;

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