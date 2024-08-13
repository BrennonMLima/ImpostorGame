import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, ButtonContainer, PlayersContainer, Title, PlayerCard, PlayerImage, PlayerName } from './add-players.styles';
import { IoMdAddCircle } from "react-icons/io";
import { Heading, Description } from '../../atoms/text/text';
import Button from '../../atoms/button/button';
import { StyledLink } from '../../atoms/button/button.styles';

const AddPlayers: React.FC = () => {
    const [players, setPlayers] = useState<{ id: number; name: string; avatar: string }[]>([]);

    useEffect(() => {
        const savedPlayers = JSON.parse(localStorage.getItem('players') || '[]');
        setPlayers(savedPlayers);
    }, []);

    return (
        <Container>
            <Title>
                <Heading>Adicione os jogadores!</Heading>
                <Description>(adicione na ordem de jogo)</Description>
            </Title>
            <PlayersContainer>
                {players.map(player => (
                    <PlayerCard key={player.id}>
                        <PlayerImage src={`${process.env.PUBLIC_URL}/images/${player.avatar}`} alt={player.name} />
                        <PlayerName>{player.name}</PlayerName>
                    </PlayerCard>
                ))}
                <Link to="/saveplayer"><IoMdAddCircle fill='var(--amarelo)' size={120} /></Link>
            </PlayersContainer>
            <ButtonContainer>
                <StyledLink to='/reveal'><Button>Começar</Button></StyledLink>
            </ButtonContainer>
        </Container>
    );
};

export default AddPlayers;
