import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer, PlayerCard, PlayerImage, PlayerName } from '../reveal-screen/reaveal-screen.styles';
import Button from '../../atoms/button/button';
import { Heading, Description } from '../../atoms/text/text';
import { Container } from '../../atoms/container/container';

const ReavealScreen: React.FC = () => {
    const navigate = useNavigate();
    const [players, setPlayers] = useState<{ id: number; name: string; avatar: string }[]>([]);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const [roundWord, setRoundWord] = useState('');
    const [impostorIndex, setImpostorIndex] = useState<number | null>(null);

    const words = ['Palavra1', 'Palavra2', 'Palavra3', 'Palavra4', 'Palavra5'];

    useEffect(() => {
        const savedPlayers = JSON.parse(localStorage.getItem('players') || '[]');
        setPlayers(savedPlayers);

        if (savedPlayers.length > 0) {
            const randomWord = words[Math.floor(Math.random() * words.length)];
            setRoundWord(randomWord);

            const impostorIdx = Math.floor(Math.random() * savedPlayers.length);
            setImpostorIndex(impostorIdx);
        }
    }, []);

    const handleRevealClick = () => {
        setIsRevealed(true);
    };

    const handleNextPlayer = () => {
        if (currentPlayerIndex < players.length - 1) {
            setCurrentPlayerIndex(currentPlayerIndex + 1);
            setIsRevealed(false);
        } else {
            navigate('/addplayers');
        }
    };

    const currentPlayer = players[currentPlayerIndex];

    if (!currentPlayer) {
        return (
            <Container>
                <Heading>Erro</Heading>
                <Description>Nenhum jogador encontrado ou todos os jogadores já foram processados.</Description>
                <Button onClick={() => navigate('/addplayers')}>Adicionar Jogadores</Button>
            </Container>
        );
    }

    return (
        <Container>
            <Heading>Confirme sua identidade!</Heading>
            <PlayerCard key={currentPlayer.id}>
                {isRevealed ? (
                    <Description>
                        {currentPlayerIndex === impostorIndex
                            ? 'Você é o Impostor!'
                            : `A palavra secreta é: ${roundWord}`}
                    </Description>
                ) : (
                    <>
                        <PlayerImage src={`${process.env.PUBLIC_URL}/images/${currentPlayer.avatar}`} alt={currentPlayer.name} />
                        <PlayerName>{currentPlayer.name}</PlayerName>
                    </>
                )}
            </PlayerCard>
            <ButtonContainer>
                {isRevealed ? (
                    <Button className='large-button' onClick={handleNextPlayer}>Próximo</Button>
                ) : (
                    <Button className='large-button' onClick={handleRevealClick}>Revelar</Button>
                )}
            </ButtonContainer>
        </Container>
    );
};

export default ReavealScreen;
