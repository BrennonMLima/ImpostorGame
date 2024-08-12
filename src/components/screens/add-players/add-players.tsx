import React, { useState } from 'react';
import { Container, ButtonContainer, PlayersContainer } from './add-players.styles';
import { IoMdAddCircle } from "react-icons/io";
import { Heading, Description } from '../../atoms/text/text';
import Button from '../../atoms/button/button';

const AddPlayers: React.FC = () => {


    return (
        <Container>
            <Heading>Adicione os jogadores!</Heading>
            <PlayersContainer>
                <IoMdAddCircle fill='var(--amarelo)' size={120} />
            </PlayersContainer>
            <ButtonContainer>
                <Button>Começar</Button>
            </ButtonContainer>
        </Container>
    );
};

export default AddPlayers;
