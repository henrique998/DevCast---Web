import styled from "styled-components"
import * as RadioGroup from "@radix-ui/react-radio-group"

export const PlaylistMiniCardContainer = styled(RadioGroup.Item)`
    img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 6px;
        border: 2.5px solid transparent;
        object-fit: cover;
    }

    h3 {
        margin-top: 0.75rem;

        font-size: 0.75rem;

        max-width: 3.5rem;
        width: 100%;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &[data-state="checked"] {
        img {
            border-color: ${props => props.theme.purple};
        }
    }
`

// export const PlaylistMiniCardWrapper = styled.div``