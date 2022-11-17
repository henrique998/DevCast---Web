import styled from "styled-components";

export const HomeContainer = styled.main`
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
`

export const HomeHeader = styled.header`
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
`