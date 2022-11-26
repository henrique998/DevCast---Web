import styled, { css } from "styled-components"
import * as Slider from "@radix-ui/react-slider"

export const PlayerContainer = styled.div`
    width: 26.5rem;
    height: 100vh;
    overflow: hidden;

    background-color: ${props => props.theme.gray900};
    border-radius: 6px;
    border-left: 1px solid ${props => props.theme.gray200};
    padding: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    @media (max-width: 414px) {
        display: none;
    }
`

export const EmptyPlayerThumbnailContainer = styled.div`
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;

    width: 18.5rem;
    height: 21.625rem;
    border-radius: 0.5rem;
    border: 3px dashed ${props => props.theme.gray300};
    background-color: ${props => props.theme.gray200};

    display: flex;
    align-items: center;
    justify-content: center;

    strong {
        width: 9.625rem;

        text-align: center;
    }
`

export const ThumbnailContainer = styled.div`
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;

    width: 18.5rem;
    height: 21.625rem;
    
    img {
        border-radius: 0.5rem;
        object-fit: cover;
    }
`

export const InfoContainer = styled.div`
    margin-top: 2rem;

    height: 3.625rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .texts {
        text-align: center;

        h2 {
            font-size: 1.25rem;
            font-weight: 600;
            max-width: 16.125rem;
            width: 100%;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        span {
            display: block;

            font-size: 1rem;
            max-width: 16.125rem;
            width: 100%;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`

export const ControllsContainer = styled.footer`
    margin-top: 2rem;

    max-width: 18.125rem;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .play-button {
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 50%;
        background-color: ${props => props.theme.purple};

        display: flex;
        align-items: center;
        justify-content: center;

        transition: filter 0.2s;
    
        &:not(:disabled):hover {
            svg {
                filter: brightness(0.85);
            }
        }

        &:disabled {
            opacity: 0.5;
            cursor: auto;
        }
    }
`

export const EpisodeDetailsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        display: block;

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

export const SkipButton = styled.button`
    svg {
        color: ${props => props.theme.gray600};
    }

    &:disabled {
        svg {
            opacity: 0.5;
            cursor: auto;
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
    margin-top: 2rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    user-select: none;

    span {
        font-size: 0.875rem;
    }
`

interface SliderTimeProps {
    isDisabled: boolean
} 

export const SliderTime = styled.span<SliderTimeProps>`
    opacity: ${props => props.isDisabled ? '0.5' : '1'};
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

    &[data-disabled] {
        cursor: auto;
    }
`

export const SliderRange = styled(Slider.Range)`
    position: absolute;

    background-color: ${props => props.theme.purple};
    height: 100%;

    cursor: pointer;

    &[data-disabled] {
        cursor: auto;
    }
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

    &[data-disabled] {
        display: none;
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
    
    &:not(:disabled) {
        ${props => !props.isActive && css`
            transition: filter 0.2s;
        
            &:hover {
                svg {
                    color: ${props => props.theme.purple};
                }
            }
        `}
    }

    &:disabled {
        cursor: auto;
        opacity: 0.85;
    }
`