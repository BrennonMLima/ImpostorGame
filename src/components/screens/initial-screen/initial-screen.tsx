import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, ButtonContainer, TutorialContainer, AnimatedTutorialContainer } from './initial-screen.styles';
import Button from '../../atoms/button/button';
import { Heading, Description } from '../../atoms/text/text';
import { Container, Header } from '../../atoms/container/container';

const InitialScreen: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');
    const navigate = useNavigate();

    const slides = [
        'Em "Impostor", uma palavra será revelada a todos os jogadores, exceto aos impostores.',
        'Cada jogador deve compartilhar algo sobre a palavra, enquanto os impostores tentam se passar por outros e ocultar sua identidade.',
        'Ache um suspeito e se prepare para a segunda rodada!',
        'Serão sorteados dois jogadores para realizar perguntas. Cada jogador sorteado terá a opção de criar uma pergunta própria ou utilizar uma pergunta sorteada previamente. O sorteado não responderá sua própria pergunta.',
        'Os impostores devem usar sua criatividade para escapar da mira dos jogadores.',
        'Descubra quem está escondido entre vocês ou engane seus amigos para vencer o jogo!',
        'O jogo terá 5 rodadas no total. Ao final de cada rodada, os jogadores podem votar no suspeito. Se um jogador acertar o impostor, ele ganha 10 pontos.',
        'Se o impostor não for descoberto, ele ganha 10 pontos. Caso ele acerte o segredo, ganhará mais 5 pontos',
        'O jogador com mais pontos ao final das 5 rodadas será o vencedor!',
    ];

    const getSlideTitle = () => {
        if (currentSlide < 3) return 'Primeira rodada';
        if (currentSlide < 6) return 'Segunda rodada';
        return 'Pontuação';
    };

    const handleNextClick = () => {
        if (currentSlide < slides.length - 1) {
            setDirection('next');
            setCurrentSlide(currentSlide + 1);
        } else {
            navigate('/addplayers');
        }
    };

    const handlePreviousClick = () => {
        if (currentSlide > 0) {
            setDirection('prev');
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <Container className='pulse-animation'>
            <Header>
                <Image src={`${process.env.PUBLIC_URL}/image.png`} alt="Imagem de exemplo" />
                <Heading>Bem-vindo ao Jogo!</Heading>
            </Header>
            <AnimatedTutorialContainer
                key={currentSlide}
                direction={direction}
            >
                <h3>{getSlideTitle()}</h3>
                <Description>{slides[currentSlide]}</Description>
            </AnimatedTutorialContainer>
            <ButtonContainer>
                {currentSlide > 0 && (
                    <Button onClick={handlePreviousClick} className='outline'>Anterior</Button>
                )}
                <Button onClick={handleNextClick}>
                    {currentSlide < slides.length - 1 ? 'Próximo' : 'Começar'}
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default InitialScreen;
