import styled, { css } from "styled-components"
import * as Slider from "@radix-ui/react-slider"

export const PlayerContainer = styled.div`
    max-width: 70rem;
    width: 100%;

    margin-left: 18.5rem;

    background-color: ${props => props.theme.gray200};
    border-radius: 6px;
    padding: 1.125rem 1rem;

    display: flex;
    align-items: center;
    gap: 1.25rem;

    position: fixed;
    left: 1.875rem;
    bottom: 1.875rem;
    right: 1.875rem;
    z-index: 100;

    @media (max-width: 414px) {
        display: none;
    }
`

export const EpisodeDetailsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        width: 3.125rem;
        height: 3.125rem;
        object-fit: cover;
        border-radius: 6px;
    }

    h3 {
        font-size: 1.125rem;
        font-weight: 500;

        max-width: 10.375rem;
        width: 100%;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span {
        display: block;
        margin-top: 0.5rem;

        font-size: 0.875rem;
        font-weight: 500;

        color: ${props => props.theme.gray600};

        max-width: 10.375rem;
        width: 100%;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const PrimaryButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;

    .play-button {
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 50%;
        background-color: ${props => props.theme.purple};

        display: flex;
        align-items: center;
        justify-content: center;

        transition: filter 0.2s;
    
        &:hover {
            svg {
                filter: brightness(0.85);
            }
        }
    }
`

export const SkipButton = styled.button`
    svg {
        color: ${props => props.theme.gray600};
    }

    &:disabled {
        svg {
            color: ${props => props.theme.gray300};
            cursor: not-allowed;
        }
    }

    transition: filter 0.2s;

    &:not(:disabled):hover {
        svg {
            filter: brightness(0.85);
        }
    }
`

export const SliderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.875rem;

    user-select: none;

    > span {
        font-size: 0.875rem;
    }
`

export const SliderRoot = styled(Slider.Root)`
    position: relative;

    display: flex;
    align-items: center;

    width: 23rem;
    height: 4px;
` 

export const SliderTrack = styled(Slider.Track)`
    position: relative;

    background-color: ${props => props.theme.gray300};
    height: 4px;
    cursor: pointer;

    flex: 1;
`

export const SliderRange = styled(Slider.Range)`
    position: absolute;

    background-color: ${props => props.theme.purple};
    height: 100%;

    cursor: pointer;
`

export const SliderThumb = styled(Slider.Thumb)`
    display: block;

    width: 0.75rem;
    height: 0.75rem;
    
    border-radius: 50%;
    background-color: ${props => props.theme.gray100};
    
    &:hover {
        cursor: grab;
    } 

    &:focus {
        cursor: grabbing;
    } 
`

export const SecondaryButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

interface SecondaryControllButtonProps {
    isActive: boolean
}

export const SecondaryControllButton = styled.button<SecondaryControllButtonProps>`
    svg {
        color: ${props => props.theme.gray300};
    }

    ${props => props.isActive && css`
        svg {
            color: ${props => props.theme.purple};
        }

        transition: filter 0.2s;
    
        &:hover {
            svg {
                filter: brightness(0.85);
            }
        }
    `}

`