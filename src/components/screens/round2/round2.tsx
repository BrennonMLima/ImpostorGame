import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Description } from '../../atoms/text/text';
import { Container, Header } from '../../atoms/container/container';
import { ButtonContainer, PlayerRow } from './round2.styles';
import Button from '../../atoms/button/button';
import { PlayerImage } from '../../atoms/player-image/player-image';

const Round2: React.FC = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState<string[]>([]);
    const [questionNumber, setQuestionNumber] = useState(1)
    const [players, setPlayers] = useState<{ id: number; name: string; avatar: string }[]>([]);
    const [randomQuestion, setRandomQuestion] = useState<string | null>(null);
    const [randomPlayer, setRandomPlayer] = useState<{ id: number; name: string; avatar: string } | null>(null);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data/questions.json`)
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
                if (data.length > 0 && players.length > 0) {
                    setRandomQuestion(data[Math.floor(Math.random() * data.length)]);
                    setRandomPlayer(players[Math.floor(Math.random() * players.length)]);
                }
            })
            .catch(error => console.error('Erro ao carregar as perguntas:', error));
    }, [players]);

    useEffect(() => {
        const savedPlayers = JSON.parse(localStorage.getItem('players') || '[]');
        setPlayers(savedPlayers);
        if (savedPlayers.length > 0 && questions.length > 0) {
            setRandomPlayer(savedPlayers[Math.floor(Math.random() * savedPlayers.length)]);
        }
    }, []);

    const handleNextQuestion = () => {
        if (questionNumber < 2) {
            setRandomQuestion(questions[Math.floor(Math.random() * questions.length)]);
            setRandomPlayer(players[Math.floor(Math.random() * players.length)]);
            setQuestionNumber(questionNumber + 1)
        }
        else {
            navigate('/discussion')
        }
    };

    return (
        <Container>
            <Header>
                <Heading>Segunda Rodada!</Heading>
                <Description className='reveal'>{questionNumber}ª pergunta</Description>
            </Header>
            <Header>
                <PlayerRow>
                    {randomPlayer ? <PlayerImage className='small' src={`${process.env.PUBLIC_URL}/images/${randomPlayer.avatar}`} /> : ''}
                    {randomPlayer ? <Description>{randomPlayer.name} pergunta:</Description>
                        : 'Selecionando jogador...'}
                </PlayerRow>
                <br />
                <Description className='reveal'>
                    {randomQuestion ? randomQuestion : 'Selecionando pergunta...'}
                </Description>
            </Header>
            <Description>
                (sinta-se livre para criar sua própria pergunta!)
            </Description>
            <ButtonContainer>
                <Button onClick={handleNextQuestion} className='large-button'>
                    {questionNumber < 2 ? 'Próxima pergunta!' : 'Ir para discussão.'}
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default Round2;
