import Link from "next/link"
import styled from "styled-components"

export const PlaylistCardContainer = styled(Link)`
    .thumbnail-container {
        position: relative;

        img {
            width: 12.5rem;
            height: 12.5rem;
            border-radius: 8px;
            object-fit: cover;
        }

        .layer {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 10;

            background-color: rgba(99, 59, 188, 0.5);
            border-radius: 0 8px 8px 0;

            width: 6.25rem;
            height: 12.5rem;

            display: flex;
            align-items: center;
            justify-content: center;

            span {
                text-align: center;

                font-size: 0.875rem;
                font-weight: 500;

                color: ${props => props.theme.gray100};
            }

            .button-container {
                position: absolute;
                right: 0.75rem;
                bottom: 0.75rem;
                z-index: 100;
            }
        }
    }

    h3 {
        margin-top: 0.875rem;

        font-size: 1rem;
        font-weight: 600;

        color: ${props => props.theme.gray100};

        max-width: 12.5rem;
        width: 100%;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`