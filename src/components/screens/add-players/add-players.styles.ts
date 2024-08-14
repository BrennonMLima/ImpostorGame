import styled from "styled-components";


export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: end;
    `
export const Title = styled.div`
        
    `
export const PlayersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 5px;
    justify-items: center;
    width: 80%;
`

export const TrashIcon = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
`;

export const PlayerCard = styled.div`
    position: relative;
    width: 120px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PlayerImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 8px;
`;

export const PlayerName = styled.span`
    font-size: 1.2rem;
    color: var(--text-color);
`;
