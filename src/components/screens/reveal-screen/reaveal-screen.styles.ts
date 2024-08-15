import styled from "styled-components";

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

export const RevealImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 8px;
`;

export const PlayerName = styled.span`
    font-size: 1.5rem;
    color: #fff;
`;
