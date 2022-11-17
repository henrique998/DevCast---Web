import styled from "styled-components"

export const SignUpContainer = styled.main`
    height: 100vh;
    overflow: hidden;

    display: flex;
`

export const RegisterContainer = styled.div`
    position: relative;
    padding: 1.875rem;
    height: 100%;
    width: 100%;

    header {
        max-width: 35rem;
        width: 100%;

        text-align: center;

        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;

        p {
            margin-top: 1rem;
            margin-left: auto;
            margin-right: auto;
            max-width: 23rem;
            width: 100%;

            color: ${props => props.theme.gray600};
        }

        a {
            margin-top: 2.5rem;
        }
    }

    form {
        max-width: 35rem;
        width: 100%;

        margin-top: 2rem;
        margin-left: auto;
        margin-right: auto;

        display: grid;
        gap: 1.5rem;
    }
`

export const Message = styled.span`
    display: block;
    max-width: 10.625rem;
    width: 100%;

    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;

    text-align: center;

    font-weight: 700;

    
    a {
        color: ${props => props.theme.purple};
        transition: color 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const CopyrightMessage = styled.span`
    position: absolute;
    left: 1rem;
    bottom: 1rem;

    font-size: 0.75rem;
    color: ${props => props.theme.gray600};
`

export const BrandContainer = styled.aside`
    height: 100%;
    width: 100%;

    background-image: url('/register-brand-layer.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
        max-width: 30rem;
        width: 100%;

        text-align: center;

        img {
            width: 10rem;
            height: 3rem;
        }

        h2 {
            margin-top: 2rem;

            font-size: 1.25rem;
            font-weight: 600;
        }

        span {
            display: block;

            margin-top: 0.625rem;

            font-size: 1rem;
            font-weight: 500;
        }
    }
`
