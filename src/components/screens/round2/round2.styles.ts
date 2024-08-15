import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: center;
`;
export const PlayerRow = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;

    &.guess{
        flex-direction: column;
    }
`