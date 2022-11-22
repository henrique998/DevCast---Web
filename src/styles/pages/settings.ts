import styled from "styled-components";

export const SettingsContainer = styled.section`
    height: calc(100vh - 4.375rem);
    overflow-y: auto;
    max-width: 35rem;
    width: 100%;
    
    margin-left: auto;
    margin-right: auto;

    h1 {
        margin-top: 3.125rem;

        text-align: center;

        strong {
            color: ${props => props.theme.purple};
        }
    }

    > div {
        margin-top: 3.5rem;

        display: flex;
        align-items: center;
        gap: 1.25rem;

        label {
            cursor: pointer;
            height: 2.375rem;
            padding: 0 0.875rem;

            border-radius: 6px;
            font-size: 0.875rem;

            background-color: ${props => props.theme.purple};
            color: ${props => props.theme.gray100};

            display: flex;
            align-items: center;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }

        button {
            height: 2.375rem;
            padding: 0 0.875rem;
            background-color: ${props => props.theme.gray300};
            border-radius: 6px;

            font-size: 0.875rem;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    @media (max-width: 414px) {
        max-width: 392px;
        padding-left: 1rem; 
        padding-right: 1rem; 
        padding-bottom: 6.875rem;

        h1 {
            margin-top: 6.875rem;
            font-size: 1.5rem;
        }

        > div {
            flex-direction: column;

            img {
                width: 9.375rem;
                height: 9.375rem;
            }

            button {
                width: 10.375rem;
            }
        }
    }
`

export const Form = styled.form`
    margin-top: 2.5rem;

    display: grid;
    gap: 1.5rem;

    label {
        strong {
            color: ${props => props.theme.purple};
        }
    }
`