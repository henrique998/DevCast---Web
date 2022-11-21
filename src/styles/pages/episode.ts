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

    .content {
        margin-top: 1.5rem;

        color: ${props => props.theme.gray600};
    }
    
    @media (max-width: 414px) {
        max-width: 100%;
        margin: 0;

        width: 100%;
        padding-bottom: 4.875rem;

        img {
            margin-top: 4.25rem;

            width: 100%;
            height: 17.25rem;
            border-radius: 0;
        }

        .content {
            max-width: 21.75rem;
            margin-left: auto;
            margin-right: auto;
        }
    }
`

interface MobilePlayButtonContainerProps {
    isEpisodePlaying: boolean
}

export const MobilePlayButtonContainer = styled.div<MobilePlayButtonContainerProps>`
    display: none;

    position: fixed;
    right: 1.75rem;
    bottom: 10rem;
    z-index: 10;

    @media (max-width: 414px) {
        display: ${props => props.isEpisodePlaying ? 'none' : 'block'}
    }
`

export const MobilePlayButton = styled.button`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${props => props.theme.purple};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    &:focus {
        filter: brightness(0.5);
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

        h1 {
            font-size: 2rem;
        }

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

    @media (max-width: 414px) {
        .title-container {
            max-width: 392px;
            padding: 0 1rem;
            
            margin-left: auto;
            margin-right: auto;

            > button {
                display: none;
            }
        }

        .infos-container {
            max-width: 392px;
            padding: 0 1rem;
            
            margin-left: auto;
            margin-right: auto;

            flex-wrap: wrap;
        }

        .bullet {
            display: none;
        }
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`