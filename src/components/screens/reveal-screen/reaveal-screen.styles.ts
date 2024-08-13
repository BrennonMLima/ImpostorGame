import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    height: 80%;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`
export const Image = styled.img`
  max-width: 90%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: center;
`
export const PlayerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PlayerImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 8px;
`;

export const PlayerName = styled.span`
    font-size: 1.2rem;
    color: #fff;
`;
