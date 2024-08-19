import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Description } from '../../atoms/text/text';
import { Container } from '../../atoms/container/container';
import Button from '../../atoms/button/button';
import { PlayerRow } from '../round2/round2.styles';
import { RevealImage } from '../reveal-screen/reaveal-screen.styles';
import { ButtonContainer } from '../initial-screen/initial-screen.styles';

const Guess: React.FC = () => {
    const navigate = useNavigate();
    const [players, setPlayers] = useState<any[]>([]);
    const [impostor, setImpostor] = useState<any | null>(null);
    const [secretRevealed, setSecretRevealed] = useState(false);
    const [secretWord, setSecretWord] = useState('');

    useEffect(() => {
        const savedPlayers = JSON.parse(localStorage.getItem('players') || '[]');
        const impostorPlayer = savedPlayers.find((player: any) => player.status);
        setPlayers(savedPlayers);
        setImpostor(impostorPlayer);
        const savedWord = localStorage.getItem('roundWord') || '';
        setSecretWord(savedWord);
    }, []);

    const handleRevealClick = () => {
        setSecretRevealed(true);
    };

    const handleCorrectGuess = () => {
        if (impostor) {
            impostor.score += 5;
            const updatedPlayers = players.map(player =>
                player.id === impostor.id ? impostor : player
            );
            localStorage.setItem('players', JSON.stringify(updatedPlayers));
        }
        navigate('/results');
    };

    const handleIncorrectGuess = () => {
        navigate('/results');
    };

    return (
        <Container className='pulse-animation'>
            <Heading>Oportunidade para o impostor!</Heading>
            {secretRevealed ? (
                <>
                    <Description className='reveal'>O segredo da rodada é:<br /> {secretWord}</Description>
                    <ButtonContainer className='guess'>
                        <Button onClick={handleCorrectGuess} className='large-button'>Acertei!</Button>
                        <Button onClick={handleIncorrectGuess} className='large-button outline'>Errei.</Button>
                    </ButtonContainer>
                </>
            ) : (<>
                <PlayerRow className='guess'>
                    {impostor ? <RevealImage className='small' src={`${process.env.PUBLIC_URL}/images/${impostor.avatar}`} /> : ''}
                    {impostor ? <Description className='reveal'>{impostor.name}, qual é o segredo?</Description>
                        : 'Carregando...'}
                </PlayerRow>
                <Button onClick={handleRevealClick} className='large-button'>Revelar a palavra</Button>
            </>
            )}
        </Container>
    );
};

export default Guess;
