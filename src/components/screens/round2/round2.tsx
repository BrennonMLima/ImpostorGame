import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heading, Description } from '../../atoms/text/text';
import { Container } from '../../atoms/container/container';
import { ButtonContainer } from './round2.styles';
import Button from '../../atoms/button/button';

const Round2: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Heading>Segunda Rodada!</Heading>
            <Description className='reveal'>
                a 1ª pergunta é:
            </Description>
            <Description>
                (sinta-se livre para criar sua própria pergunta!)
            </Description>
            <Button onClick={() => navigate('/round2')} className='large-button'>Próxima rodada!</Button>
        </Container>
    );
};

export default Round2;
