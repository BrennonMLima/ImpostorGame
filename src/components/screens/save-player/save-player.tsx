import React, { useState } from 'react';
import { IoMdAddCircle } from "react-icons/io";
import { Description, Heading } from '../../atoms/text/text';
import { Container, PlayersContainer, ButtonContainer, FormContainer, InputContainer, PlaceHolder } from './save-player-styles';
import Button from '../../atoms/button/button';
import Input from '../../atoms/input/input';

const SavePlayer: React.FC = () => {


    return (
        <Container>
            <Heading>Adicione um jogador!</Heading>
            <FormContainer>
                <InputContainer>
                    <Input
                        type="text" placeholder=" " />
                    <PlaceHolder>Nome</PlaceHolder>
                </InputContainer>
                <Description>Foto de perfil: </Description>
                <ButtonContainer>
                    <Button className='outline'>Voltar</Button>
                    <Button>Salvar</Button>
                </ButtonContainer>
            </FormContainer>
        </Container>
    );
};

export default SavePlayer;
