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
    votes: number;
};

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

        if (votedPlayer) {
            votedPlayer.votes += 1;
            if (votedPlayer.status) {
                currentPlayer.score += 10;
            }
        }

        if (currentPlayerIndex < players.length - 1) {
            setCurrentPlayerIndex(currentPlayerIndex + 1);
            setSelectedPlayerId(null);
        } else {
            const impostor = players.find(player => player.status);
            const maxVotes = Math.max(...players.map(player => player.votes));

            if (impostor && impostor.votes <= maxVotes) {
                impostor.score += 10;
            }

            localStorage.setItem('players', JSON.stringify(players));
            navigate('/guess');
        }
    };

    const currentPlayer = players[currentPlayerIndex];
    if (!currentPlayer) {
        return null;
    }

    const remainingPlayers = players.filter(player => player.id !== currentPlayer.id);

    return (
        <Container className='pulse-animation'>
            <Heading>Vez de {currentPlayer.name} votar!</Heading>
            <PlayersContainer>
                {remainingPlayers.map(player => (
                    <PlayerCard key={player.id}>
                        <SelectableImage
                            src={`${process.env.PUBLIC_URL}/images/${player.avatar}`}
                            alt={player.name}
                            onClick={() => handlePlayerClick(player.id)}
                            selected={player.id === selectedPlayerId}
                        />
                        <Description>{player.name}</Description>
                    </PlayerCard>
                ))}
            </PlayersContainer>
            <Button onClick={handleConfirmVote} className='large-button'>Confirmar Voto</Button>
        </Container>
    );
};

export default Voting;
