import styled from "styled-components";

export const RankingTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const TableRow = styled.tr`
    text-align: center;
`;

export const TableCell = styled.td`
    padding: 10px;
    vertical-align: middle;
    font-size: 25px;
`;

export const PlayerImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

export const NameCell = styled.td`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
`;

export const PointsCell = styled.div`
    margin-top: 5px;
    font-size: 15px;
    color: #999;
`;

