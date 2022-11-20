import styled, { css } from "styled-components"
import * as Slider from "@radix-ui/react-slider"

interface MobilePlayerContainerProps {
    isShowingDetails: boolean
}

export const Container = styled.div`
    max-width: 400px;
    width: 100%;
    height: 100%;

    margin-left: auto;
    margin-right: auto;

    padding: 0 1rem;
`

export const MobilePlayerContainer = styled.div<MobilePlayerContainerProps>`
    display: none;

    position: fixed;
    bottom: -695px;
    left: 0;
    right: 0;
    z-index: 90;

    /* transition: 2s; */

    ${props => props.isShowingDetails && css`
        top: 0;
    `}
    
    background-color: ${props => props.theme.gray900};

    .preview {
        height: 4.375rem;
        border-top: 1px solid ${props => props.theme.gray200};

        .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    header {
        .container {
            padding-top: 1.5rem;

            display: flex; 
            align-items: center;
            justify-content: space-between;
        }
    }

    @media (max-width: 414px) {
        display: block;
    }
`

export const MobilePlayerContentContainer = styled.div`
    margin-top: 3.125rem;

    text-align: center;

    img {
        width: 22rem;
        height: 22rem;
        object-fit: cover;
        border-radius: 6px;
    }

    .details {
        margin-top: 2.5rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .texts {

            h2 {
                font-size: 1.5rem;
                font-weight: 500;

                margin-bottom: 1rem;
            }

            span {
                color: ${props => props.theme.gray600};

                font-size: 0.875rem;
            }
        }
    }
`

interface MobilePlayerButtonProps {
    isActive: boolean
}

export const MobilePlayerButton = styled.button<MobilePlayerButtonProps>`
    svg {
        color: ${props => props.isActive ? props.theme.purple : props.theme.gray300};
    }
`

export const PreviewMobileSliderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.875rem;

    user-select: none;

    > span {
        font-size: 0.875rem;
    }
`

export const MobileSliderContainer = styled.div`
    margin-top: 3.125rem;

    display: flex;
    align-items: center;
    gap: 0.875rem;

    user-select: none;

    > span {
        font-size: 0.875rem;
    }
`

export const MobilePlayerControllsContainer = styled.div`
    margin-top: 3.125rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const PlayerControll = styled.button`
    color: ${props => props.theme.gray600};

    &:disabled {
        svg {
            color: ${props => props.theme.gray300};
        }
    }
`

export const PlayControll = styled.button`
    width: 4.75rem;
    height: 4.75rem;
    border-radius: 50%;
    background-color: ${props => props.theme.purple};

    display: flex;
    align-items: center;
    justify-content: center;
`

export const MobileSliderRoot = styled(Slider.Root)`
    position: relative;

    display: flex;
    align-items: center;

    min-width: 9.375rem;
    width: 100%;
    height: 4px;
` 

export const MobileSliderTrack = styled(Slider.Track)`
    position: relative;

    background-color: ${props => props.theme.gray300};
    height: 4px;
    cursor: pointer;

    flex: 1;
`

export const MobileSliderRange = styled(Slider.Range)`
    position: absolute;

    background-color: ${props => props.theme.purple};
    height: 100%;

    cursor: pointer;
`

export const MobileSliderThumb = styled(Slider.Thumb)`
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