import * as Separator from "@radix-ui/react-separator"

import styled from "styled-components";

export const SeparatorContainer = styled(Separator.Root)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    color: ${props => props.theme.gray600};
`

export const SeparatorIndicator = styled(Separator.Separator)`
    max-width: 16rem;

    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.gray600};
`