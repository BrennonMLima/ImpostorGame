import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/button';
import { Description, Heading } from '../../atoms/text/text';
import SelectableImage from '../../atoms/selectableImage/selectable-image';
import { Container } from '../../atoms/container/container';
import { ButtonContainer } from '../initial-screen/initial-screen.styles';
import { PlayerCard, PlayersContainer } from '../add-players/add-players.styles';

type Player = {
    id: number;
    name: string;
    avatar: string;
    score: number;
    status: boolean;
}

const Voting: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const savedPlayers = JSON.parse(localStorage.getItem('players') || '[]') as Player[];
        setPlayers(savedPlayers);
    }, []);


    const handlePlayerClick = (id: number) => {
        setSelectedPlayerId(id);
    };

    const handleConfirmVote = () => {
        const currentPlayer = players[currentPlayerIndex];
        const votedPlayer = players.find(player => player.id === selectedPlayerId);

        if (votedPlayer && votedPlayer.status) {
            currentPlayer.score += 10;
        }

        if (currentPlayerIndex < players.length - 1) {
            setCurrentPlayerIndex(currentPlayerIndex + 1);
            setSelectedPlayerId(null);
        } else {
            localStorage.setItem('players', JSON.stringify(players));
            navigate('/addplayers');
        }
    };

    const currentPlayer = players[currentPlayerIndex];
    if (!currentPlayer) {
        return null;
    }

    const remainingPlayers = players.filter(player => player.id !== currentPlayer.id);

    return (
        <Container>
            <Heading>Vez de {currentPlayer.name} votar!</Heading>
            <PlayersContainer>
                {remainingPlayers.map(player => (
                    <PlayerCard>
                        <SelectableImage
                            key={player.id}
                            src={`${process.env.PUBLIC_URL}/images/${player.avatar}`}
                            alt={player.name}
                            onClick={() => handlePlayerClick(player.id)}
                            selected={player.id === selectedPlayerId}
                        />
                        <Description>{player.name}</Description>
                    </PlayerCard>
                ))}
            </PlayersContainer>
            <ButtonContainer>
                <Button onClick={handleConfirmVote}>Confirmar Voto</Button>
            </ButtonContainer>
        </Container>
    );
};

export default Voting;
