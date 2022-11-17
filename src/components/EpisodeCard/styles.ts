import Link from "next/link";
import styled from "styled-components";

export const EpisodeCardContainer = styled(Link)`
    .thumbnail-container {
        position: relative;

        img {
            width: 12.5rem;
            height: 12.5rem;
            border-radius: 8px;
            object-fit: cover;  
        }
        
        
        .button-container {
            position: absolute;
            right: 0.75rem;
            bottom: 0.75rem;
            z-index: 100;
        }
    }

    h3 {
        margin-top: 0.875rem;

        font-size: 1rem;
        font-weight: 500;

        color: ${props => props.theme.gray100};

        max-width: 12.5rem;
        width: 100%;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .info-container {
        margin-top: 0.5rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;

        font-size: 0.875rem;

        color: ${props => props.theme.gray600};

        span {
            max-width: 6.625rem;
            width: 100%;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .bullet {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: ${props => props.theme.gray600};
        }

        time {
            max-width: 4rem;
            width: 100%;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`

export const DurationBadge = styled.div`
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    z-index: 100;

    height: 1.75rem;
    max-width: 5rem;
    width: 100%;
    padding: 0 0.75rem;
    border-radius: 2rem;
    background-color: ${props => props.theme.purple};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.875rem;
    font-weight: 500;

    color: ${props => props.theme.gray100};
`