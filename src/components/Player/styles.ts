import styled from "styled-components";

export const PlayerContainer = styled.div`
    max-width: 70rem;
    width: 100%;
    height: 6.25rem;

    margin-left: 18.5rem;
    /* margin-right: auto; */

    background-color: ${props => props.theme.gray200};
    border-radius: 6px;

    position: fixed;
    left: 1.875rem;
    bottom: 1.875rem;
    right: 1.875rem;
    z-index: 100;
`