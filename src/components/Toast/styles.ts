import * as Toast from "@radix-ui/react-toast"
import styled from "styled-components"

export const ToastContainer = styled.div`
    background-color: ${props => props.theme.gray300};
    border-radius: 6px;
    padding: 0 1.25rem;
    padding-bottom: 1.25rem;

    width: 21.25rem;    
    height: 5.625rem;

    list-style: none;

    display: grid;
    align-items: center;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 1.125rem;
    }
`

export const ToastTitle = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;
`

export const ToastCheck = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${props => props.theme.purple};

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ToastDescription = styled.p`
    margin-top: 0.5rem;

    font-size: 0.875rem;

    line-height: 0.875rem;
`