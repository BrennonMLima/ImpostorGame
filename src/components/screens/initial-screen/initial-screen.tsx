import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Image, ButtonContainer } from './initial-screen.styles';
import Button from '../../atoms/button/button';
import { Heading, Description } from '../../atoms/text/text';

const InitialScreen: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        'Em "Impostor", uma palavra será revelada a todos os jogadores, exceto aos impostores.',
        'Cada jogador deve compartilhar algo sobre a palavra, enquanto os impostores tentam se passar por outros e ocultar sua identidade.',
        'Descubra quem está escondido entre vocês ou engane seus amigos para vencer o jogo!',
    ];

    const handleNextClick = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handlePreviousClick = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <Container>
            <Image src={`${process.env.PUBLIC_URL}/image.png`} alt="Imagem de exemplo" />
            <Heading>Bem-vindo ao Jogo!</Heading>
            <Description>{slides[currentSlide]}</Description>
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
