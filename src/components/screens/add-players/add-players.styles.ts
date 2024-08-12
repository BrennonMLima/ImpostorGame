import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 80%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: end;
`
export const PlayersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 5px;
    justify-items: center;
    width: 80%;
`