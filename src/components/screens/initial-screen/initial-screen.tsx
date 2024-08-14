import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, ButtonContainer, TutorialContainer, Header } from './initial-screen.styles';
import Button from '../../atoms/button/button';
import { Heading, Description } from '../../atoms/text/text';
import { Container } from '../../atoms/container/container';
import { FaUserSecret } from "react-icons/fa";

const InitialScreen: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const slides = [
        'Em "Impostor", uma palavra será revelada a todos os jogadores, exceto aos impostores.',
        'Cada jogador deve compartilhar algo sobre a palavra, enquanto os impostores tentam se passar por outros e ocultar sua identidade.',
        'Ache um suspeito e se prepare para a segunda rodada!',
        'Serão sorteados dois jogadores para fazer duas perguntas, o jogador sorteado pode criar sua própria pergunta, ou utilizar a pergunta sorteada.',
        'Os impostores devem usar sua criatividade para escapar da mira dos jogadores.',
        'Descubra quem está escondido entre vocês ou engane seus amigos para vencer o jogo!',
    ];

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
            <Header>
                <Image src={`${process.env.PUBLIC_URL}/image.png`} alt="Imagem de exemplo" />
                {/* <FaUserSecret fill='var(--amarelo)' size={150}></FaUserSecret> */}
                <Heading>Bem-vindo ao Jogo!</Heading>
            </Header>
            <TutorialContainer>
                <h3>{roundText}</h3>
                <Description>{slides[currentSlide]}</Description>
            </TutorialContainer>
            <ButtonContainer>
                {currentSlide > 0 && (
                    <Button onClick={handlePreviousClick} className='outline'>Anterior</Button>
                )}
                <Button onClick={handleNextClick}>
                    {currentSlide < slides.length - 1 ? 'Próximo' : 'Começar'}
                </Button>
            </ButtonContainer>
        </Container >
    );
};

export default InitialScreen;
