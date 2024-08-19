import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonContainer, PlayersContainer, Title, PlayerCard, PlayerName, TrashIcon } from './add-players.styles';
import { IoMdAddCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { Heading, Description } from '../../atoms/text/text';
import Button from '../../atoms/button/button';
import { Container } from '../../atoms/container/container';
import { PlayerImage } from '../../atoms/player-image/player-image';

const AddPlayers: React.FC = () => {
    const navigate = useNavigate();
    const [players, setPlayers] = useState<{ id: number; name: string; avatar: string }[]>([]);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const savedPlayers = JSON.parse(localStorage.getItem('players') || '[]');
        setPlayers(savedPlayers);

        localStorage.setItem('rounds', JSON.stringify(1));
    }, []);

    const handleDeletePlayer = (id: number) => {
        const updatedPlayers = players.filter(player => player.id !== id);
        setPlayers(updatedPlayers);
        localStorage.setItem('players', JSON.stringify(updatedPlayers));
    };

    const handleStartClick = () => {
        if (players.length < 3) {
            setError('Adicione pelo menos 3 jogadores');
        } else {
            const resetPlayers = players.map(player => ({ ...player, score: 0 }));
            setPlayers(resetPlayers);
            localStorage.setItem('players', JSON.stringify(resetPlayers));
            localStorage.setItem('round', '1');
            navigate('/reveal');
        }
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    return (
        <Container className='pulse-animation'>
            <Title>
                <Heading>Adicione os jogadores!</Heading>
                <Description>(adicione na ordem de jogo)</Description>
            </Title>
            {error && <Description style={{ color: 'red' }}>{error}</Description>}
            <PlayersContainer>
                {players.map(player => (
                    <PlayerCard key={player.id}>
                        {isEditing && (
                            <TrashIcon onClick={() => handleDeletePlayer(player.id)}>
                                <IoMdCloseCircle fill='var(--amarelo)' size={30} />
                            </TrashIcon>
                        )}
                        <PlayerImage src={`${process.env.PUBLIC_URL}/images/${player.avatar}`} alt={player.name} />
                        <PlayerName>{player.name}</PlayerName>
                    </PlayerCard>
                ))}
                <Link to="/saveplayer">
                    <IoMdAddCircle fill='var(--amarelo)' size={120} />
                </Link>
            </PlayersContainer>
            <ButtonContainer>
                <Button className='outline' onClick={handleEditClick}>
                    {isEditing ? 'Concluído' : 'Editar'}
                </Button>
                <Button onClick={handleStartClick} >
                    Começar
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default AddPlayers;
