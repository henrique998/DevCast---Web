import styled from "styled-components"

export const PlaylistContainer = styled.section`
    height: calc(100vh - 4.375rem);
    overflow-y: auto;
`

export const PlaylistWrapper = styled.div`
    max-width: 58.125rem;

    margin: 0 auto;
    padding-bottom: 3.125rem;
`

export const Banner = styled.div`
    margin-top: 3.125rem;

    width: 100%;
    height: 18.75rem;

    background: linear-gradient(95.75deg, #5B1DE3 0%, #633BBC 74.76%);
    border-radius: 0.625rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .texts-container {
        margin-left: 5rem;

        h1 {
            font-size: 2rem;
            font-weight: 700;
        }

        p {
            margin-top: 0.75rem;

            font-weight: 600;
        }

        strong {
            display: block;

            margin-top: 0.75rem;

            font-weight: 600;
        }
    }

    > img {
        width: 7.375rem;
        height: 2rem;
    }

    .image-container {
        width: 16.875rem;
        height: 100%;

        background-image: url('/banner-layer.png');
    }

    @media (max-width: 414px) {
        margin-top: 4.375rem;
        border-radius: 0;
        height: 17.25rem;
        
        display: grid;
        justify-content: center;

        img {
            margin-left: auto;
        }

        .texts-container {
            margin-top: 1.5rem;
            margin-left: 0;
            text-align: center;

            padding: 0 1rem;
        }

        .image-container {
            display: none;
        }
    }
`

export const EpisodesTableContainer = styled.div`
    margin-top: 2.5rem;

    @media (max-width: 414px) {
        max-width: 392px;
        padding: 0 1rem;

        margin-left: auto;
        margin-right: auto;
    }
`