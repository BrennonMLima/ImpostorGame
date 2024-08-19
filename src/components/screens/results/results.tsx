import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../../atoms/text/text';
import { Container } from '../../atoms/container/container';
import { Description } from '../../atoms/text/text';
import { RankingTable, TableRow, TableCell, PlayerImage, NameCell, PointsCell } from './results.styles';
import Button from '../../atoms/button/button';
import { ButtonContainer } from '../initial-screen/initial-screen.styles';

type Player = {
    id: number;
    name: string;
    avatar: string;
    score: number;
    votes: number;
};

const Results: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [round, setRound] = useState<number>(1);
    const navigate = useNavigate();

    useEffect(() => {
        const savedPlayers = JSON.parse(localStorage.getItem('players') || '[]') as Player[];
        const sortedPlayers = savedPlayers.sort((a, b) => b.score - a.score);
        setPlayers(sortedPlayers);

        const currentRound = parseInt(localStorage.getItem('round') || '1', 10);
        setRound(currentRound);
    }, []);

    const handleNextStep = () => {
        if (round < 5) {
            const updatedPlayers = players.map(player => ({ ...player, votes: 0 }));
            setPlayers(updatedPlayers);
            localStorage.setItem('players', JSON.stringify(updatedPlayers));

            localStorage.setItem('round', (round + 1).toString());
            navigate('/reveal');
        } else {
            localStorage.removeItem('round');
            navigate('/addplayers');
        }
    };

    const handleEndGame = () => {
        localStorage.removeItem('round');
        navigate('/addplayers');
    }

    return (
        <Container className='pulse-animation'>
            <Heading>{round < 5 ? `Resultados da ${round}ª rodada:` : 'Resultados da partida:'}</Heading>
            <RankingTable>
                {players.map((player, index) => (
                    <TableRow key={player.id}>
                        <TableCell>{`${index + 1}º`}</TableCell>
                        <TableCell>
                            <PlayerImage src={`${process.env.PUBLIC_URL}/images/${player.avatar}`} />
                        </TableCell>
                        <NameCell>
                            <Description>{player.name}</Description>
                            <PointsCell>{`Pontos: ${player.score}`}</PointsCell>
                        </NameCell>
                    </TableRow>
                ))}
            </RankingTable>
            <ButtonContainer className='guess'>
                <Button className='large-button' onClick={handleNextStep}>
                    {round < 5 ? 'Ir para a próxima rodada' : 'Começar nova partida'}
                </Button>
                <Button onClick={handleEndGame} className='large-button outline'>
                    Encerrar partida.
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default Results;
