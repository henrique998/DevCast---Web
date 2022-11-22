import styled from "styled-components"

export const SelectedThumbnailContainer = styled.div`
    position: relative;

    margin-top: 0.875rem;

    width: 7.875rem;
    height: 7.875rem;
    border-radius: 6px;

    img {
        width: inherit;
        height: inherit;
        object-fit: cover;
        border-radius: 6px;
    }

    button {
        position: absolute;
        right: 0.5rem;
        bottom: 0.5rem;

        svg {
            color: ${props => props.theme.purple};
        }
    }
`