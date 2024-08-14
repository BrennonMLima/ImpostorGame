import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Description } from '../../atoms/text/text';
import { Container } from '../../atoms/container/container';
import Button from '../../atoms/button/button';

const Discussion: React.FC = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState<number>(120);

    useEffect(() => {
        if (timeLeft === 0) {
            navigate('/voting');
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, navigate]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <Container>
            <Heading>Hora da discussão!</Heading>
            <Description className='reveal'>
                Restam {formatTime(timeLeft)} para decidir quem é o impostor!
            </Description>
            <Button onClick={() => navigate('/voting')} className='large-button'>Pronto para a votação!</Button>
        </Container>
    );
};

export default Discussion;
