import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Description } from '../../atoms/text/text';
import { Container, Header } from '../../atoms/container/container';
import { ButtonContainer, PlayerRow } from './round2.styles';
import Button from '../../atoms/button/button';
import { PlayerImage } from '../../atoms/player-image/player-image';

type QuestionCategories = 'lugares' | 'comidas' | 'objetos';

const Round2: React.FC = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState<{ [key in QuestionCategories]: string[] }>({
        lugares: [],
        comidas: [],
        objetos: [],
    });
    const [questionNumber, setQuestionNumber] = useState(1);
    const [players, setPlayers] = useState<{ id: number; name: string; avatar: string }[]>([]);
    const [randomQuestion, setRandomQuestion] = useState<string | null>(null);
    const [randomPlayer, setRandomPlayer] = useState<{ id: number; name: string; avatar: string } | null>(null);
    const [currentCategory, setCurrentCategory] = useState<QuestionCategories>('lugares');

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data/questions.json`)
            .then(response => response.json())
            .then(data => setQuestions(data))
            .catch(error => console.error('Erro ao carregar as perguntas:', error));
    }, []);

    useEffect(() => {
        const savedPlayers = JSON.parse(localStorage.getItem('players') || '[]');
        setPlayers(savedPlayers);

        if (savedPlayers.length > 0 && Object.keys(questions).length > 0) {
            const categories: QuestionCategories[] = ['lugares', 'comidas', 'objetos'];
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            setCurrentCategory(randomCategory);

            const randomQuestion = questions[randomCategory][Math.floor(Math.random() * questions[randomCategory].length)];
            setRandomQuestion(randomQuestion);

            setRandomPlayer(savedPlayers[Math.floor(Math.random() * savedPlayers.length)]);
        }
    }, [questions]);

    const handleNextQuestion = () => {
        if (questionNumber < 2) {
            const randomQuestion = questions[currentCategory][Math.floor(Math.random() * questions[currentCategory].length)];
            setRandomQuestion(randomQuestion);
            setRandomPlayer(players[Math.floor(Math.random() * players.length)]);
            setQuestionNumber(questionNumber + 1);
        } else {
            navigate('/discussion');
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
