import styled from "styled-components";

export const LandingContainer = styled.main`
    height: 100vh;
    overflow: hidden;
    background-image: url('/background-layer.svg');

    section {
        max-width: 1180px;
        padding: 0 1rem;
        margin-left: auto;
        margin-right: auto;
        height: calc(100% - 4.375rem);

        display: flex;
        align-items: center;
        gap: 1.25rem;

        img {
            width: 29.375rem;
            height: 30rem;
        }
    }

    @media (max-width: 414px) {
        background-image: url('/mobile-background-layer.svg');

        section {
            align-items: flex-start;

            margin-top: 5rem;
            max-width: 392px;

            > img {
                display: none;
            }
        }
    }
`

export const LandingHeader = styled.header`
    height: 4.375rem;

    .container {
        max-width: 1180px;
        height: 100%;
        padding: 0 1rem;
        margin-left: auto;
        margin-right: auto;

        display: flex;
        align-items: center;
        justify-content: space-between;

        > div {
            width: 15rem;

            display: flex;
            align-items: center;
            gap: 1rem;
        }

        @media (max-width: 414px) {
            max-width: 392px;

            > div {
                display: none;
            }
        }
    }

`

export const MenuButton = styled.button`
    display: none;

    @media (max-width: 414px) {
        display: block;
    }
`

export const TextsContainer = styled.div`
    h1 {
        font-size: 3rem;
        font-weight: 600;

        strong {
            color: ${props => props.theme.purple};
        }
    }

    p {
        font-size: 1.25rem;
        font-weight: 500;
        color: ${props => props.theme.gray600};

        margin-top: 1.5rem;
    }

    > span {
        display: block;

        font-size: 1rem;
        font-weight: 500;
        color: ${props => props.theme.gray100};

        margin-top: 1.5rem;
    }

    form {
        margin-top: 1.25rem;

        max-width: 30.375rem;
        height: 3.3rem;

        display: flex;
        align-items: flex-start;
        gap: 1rem;

        .input {
            flex: 1;
        }

        button {
            max-width: 9.375rem;
        }
    }

    @media (max-width: 414px) {
        text-align: center;

        h1 {
            font-size: 1.375rem;
        }

        p {
            margin-top: 2rem;
            
            font-size: 0.875rem;
        }

        > span {
            margin-top: 2rem;

            font-size: 0.875rem;
        }

        form {
            margin-top: 2rem;

            flex-direction: column;
            height: fit-content;
            max-width: 24.5rem;

            .input {
                width: 100%;
            }

            button {
                max-width: 24.5rem;
                width: 100%;

                height: 3.125rem;
            }
        }
    }
`

export const UsersCountContainer = styled.div`
    margin-top: 2rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    .images {
        img {
            width: 3.125rem;
            height: 3.125rem;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid ${props => props.theme.gray900};

            & + img {
                margin-left: -1rem;
            }
        }
    }

    span {
        font-size: 1rem;
        font-weight: 600;

        color: ${props => props.theme.gray100};

        strong {
            display: block;
            color: ${props => props.theme.purple};
        }
    }

    @media (max-width: 414px) {
        flex-direction: column;
        align-items: flex-start;

        span {
            display: block;

            text-align: left;
        }
    }
`