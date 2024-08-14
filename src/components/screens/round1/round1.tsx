import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Description } from '../../atoms/text/text';
import { Container } from '../../atoms/container/container';
import Button from '../../atoms/button/button';

const Round1: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Heading>Primeira Rodada!</Heading>
            <Description className='reveal'>
                Cada jogador deve falar uma palavra relacionada ao segredo!
            </Description>
            <Button onClick={() => navigate('/round2')} className='large-button'>Próxima rodada!</Button>
        </Container>
    );
};

export default Round1;
