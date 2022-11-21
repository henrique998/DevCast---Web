import * as Dialog from "@radix-ui/react-dialog"
import * as Separator from "@radix-ui/react-separator"
import styled from "styled-components"

export const DialogOverlay = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0;
    z-index: 100;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%);
    backdrop-filter: blur(10px);
`

export const DialogContent = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;

    max-width: 32.5rem;
    width: 100%;

    padding: 2rem;
    background-color: ${props => props.theme.gray300};

    border-radius: 8px;
`

export const DialogClose = styled(Dialog.Close)`
    position: absolute;
    top: 1rem;
    right: 1rem;

    svg {
        color: ${props => props.theme.gray600};
    }

    transition: color 0.2s;

    &:hover {
        svg {
            color: ${props => props.theme.purple};
        }
    }
`

export const DialogTitle = styled(Dialog.Title)`
    text-align: center;

    font-size: 1.25rem;
    font-weight: 600;
`

export const ImageFieldset = styled.fieldset`
    border: 0;

    h3 {
        font-size: 1rem;
        font-weight: 500;
    }

    label {
        margin-top: 0.875rem;

        background-color: ${props => props.theme.gray600};
        
        width: 7.875rem;
        height: 7.875rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 6px;
        cursor: pointer;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.85);
        }
    }
`

export const FormSeparator = styled(Separator.Root)`
    margin-top: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    color: ${props => props.theme.gray600};
`

export const FormSeparatorIndicator = styled(Separator.Separator)`
    max-width: 6.25rem;
    width: 100%;
    height: 1px;

    background-color: ${props => props.theme.gray600};
`
export const ContentContainer = styled.div`
    max-width: 22.625rem;
    width: 100%;

    margin-left: auto;
    margin-right: auto;

    form {
        margin-top: 1.5rem;

        display: grid;
        gap: 1.5rem;

        label {
            strong {
                color: ${props => props.theme.purple};
            }
        }

        > div {
            display: flex;
            align-items: center;
            gap: 1.125rem;

            textarea {
                width: 13.375rem;
                height: 7.875rem;
                resize: none;

                background-color: ${props => props.theme.gray200};
                border-radius: 6px;
                border: 2.5px solid ${props => props.theme.gray300};
                padding: 1rem;

                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.85);
                }

                &:focus {
                    border-color: ${props => props.theme.purple};
                }

                &::placeholder {
                    color: ${props => props.theme.gray600};
                }
            }
        }

        /* button {
            margin-left: auto;
            max-width: 8.25rem;
        }   */
    }
`

export const PlaylistsWrapper = styled.div`
    margin-top: 1.25rem;

    /* ul {
        display: flex;
        align-items: center;
        gap: 1.25rem;
    } */

    button {
        margin-top: 1.25rem;
    }
`