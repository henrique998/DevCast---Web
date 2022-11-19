import styled from "styled-components";

export const TableContainer = styled.table`
    width: 100%;

    th {
        padding-bottom: 1.5rem;
        border-bottom: 1px solid ${props => props.theme.gray200};

        text-align: left;

        font-size: 0.875rem;
        font-weight: 500;
    }

    td {
        padding: 0.75rem 0;
        color: ${props => props.theme.gray600};

        img {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 6px;
            object-fit: cover;
        }

        &:first-child {
            display: flex;
            align-items: center;
            gap: 1rem;

            a {
                max-width: 12.5rem;
                width: 100%;

                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                color: ${props => props.theme.gray600};
                transition: 0.2s;

                &:hover {
                    color: ${props => props.theme.purple};
                    text-decoration: underline;
                }
            }
        }

        &:nth-child(2) {
            span {
                max-width: 10.375rem;
                width: 100%;

                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        &:nth-child(5) {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;

            span {
                display: block;
            }
        }
    }
`