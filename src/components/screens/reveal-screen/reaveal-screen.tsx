import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer, PlayerCard, PlayerImage, PlayerName } from '../reveal-screen/reaveal-screen.styles';
import Button from '../../atoms/button/button';
import { Heading, Description } from '../../atoms/text/text';
import { Container } from '../../atoms/container/container';
import { FaUserSecret } from 'react-icons/fa';

type WordCategories = 'lugares' | 'comidas' | 'objetos';

const ReavealScreen: React.FC = () => {
    const navigate = useNavigate();
    const [players, setPlayers] = useState<{ id: number; name: string; avatar: string; score: number; status: boolean }[]>([]);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const [roundWord, setRoundWord] = useState('');
    const [roundCategory, setRoundCategory] = useState<WordCategories>('lugares');
    const [impostorIndex, setImpostorIndex] = useState<number | null>(null);
    const [words, setWords] = useState<{ [key in WordCategories]: string[] }>({
        lugares: [],
        comidas: [],
        objetos: []
    });

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data/words.json`)
            .then(response => response.json())
            .then(data => setWords(data))
            .catch(error => console.error('Erro ao carregar as palavras:', error));
    }, []);

    useEffect(() => {
        const savedPlayers = JSON.parse(localStorage.getItem('players') || '[]');

        if (savedPlayers.length > 0 && words) {
            const categories: WordCategories[] = ['lugares', 'comidas', 'objetos'];
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            setRoundCategory(randomCategory);

            const randomWord = words[randomCategory][Math.floor(Math.random() * words[randomCategory].length)];
            setRoundWord(randomWord);

            const impostorIdx = Math.floor(Math.random() * savedPlayers.length);
            setImpostorIndex(impostorIdx);

            const updatedPlayers = savedPlayers.map((player: any, index: number) =>
                index === impostorIdx ? { ...player, status: true } : { ...player, status: false }
            );

            setPlayers(updatedPlayers);
            localStorage.setItem('players', JSON.stringify(updatedPlayers));
        }
    }, [words]);

    const handleRevealClick = () => {
        setIsRevealed(true);
    };

    const handleNextPlayer = () => {
        if (currentPlayerIndex < players.length - 1) {
            setCurrentPlayerIndex(currentPlayerIndex + 1);
            setIsRevealed(false);
        } else {
            navigate('/round1');
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
                    currentPlayerIndex === impostorIndex ? (
                        <Container>
                            <Description className='reveal'>Você é o Impostor!</Description>
                            <FaUserSecret fill='var(--amarelo)' size={150}></FaUserSecret>
                            <Description>Categoria: {roundCategory}</Description>
                        </Container>
                    ) : (
                        <Container>
                            <Description className='reveal'>Categoria: {roundCategory}</Description>
                            <br />
                            <Description className='reveal'>O segredo é: {roundWord}</Description>
                        </Container>
                    )
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
