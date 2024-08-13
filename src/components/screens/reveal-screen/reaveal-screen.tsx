import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ButtonContainer, Image, PlayerCard, PlayerImage, PlayerName } from '../reveal-screen/reaveal-screen.styles';
import Button from '../../atoms/button/button';
import { Heading, Description } from '../../atoms/text/text';

const ReavealScreen: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    const [players, setPlayers] = useState<{ id: number; name: string; avatar: string }[]>([]);

    useEffect(() => {
        const savedPlayers = JSON.parse(localStorage.getItem('players') || '[]');
        setPlayers(savedPlayers);
    }, []);


    const slides = [
        'Em "Impostor", uma palavra será revelada a todos os jogadores, exceto aos impostores.',
        'Cada jogador deve compartilhar algo sobre a palavra, enquanto os impostores tentam se passar por outros e ocultar sua identidade.',
        'Ache um suspeito e se prepare para a segunda rodada!',
        'Cada jogador deve fazer uma pergunta para os outros jogadores.',
        'Os impostores devem usar sua criatividade para escapar da mira dos jogadores.',
        'Descubra quem está escondido entre vocês ou engane seus amigos para vencer o jogo!',
    ];

    const player = {
        id: 1,
        name: 'Jão',
        avatar: 'avatar1.png',
    };
    const roundText = currentSlide < slides.length / 2 ? 'Primeira rodada' : 'Segunda rodada';

    const handleNextClick = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            navigate('/addplayers');
        }
    };

    const handlePreviousClick = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <Container>
            <Heading>Confirme sua indentidade!</Heading>
            <PlayerCard key={player.id}>
                <PlayerImage src={`${process.env.PUBLIC_URL}/images/${player.avatar}`} alt={player.name} />
                <PlayerName>{player.name}</PlayerName>
            </PlayerCard>
            <Image src={`${process.env.PUBLIC_URL}/image.png`} alt="Imagem de exemplo" />
            <ButtonContainer>
                {currentSlide > 0 && (
                    <Button onClick={handlePreviousClick} className='outline'>Anterior</Button>
                )}
                <Button onClick={handleNextClick}>
                    {currentSlide < slides.length - 1 ? 'Revelar' : 'Começar'}
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default ReavealScreen;
