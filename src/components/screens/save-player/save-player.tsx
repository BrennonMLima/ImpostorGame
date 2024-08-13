import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Description, Heading } from '../../atoms/text/text';
import { Container, ButtonContainer, FormContainer, InputContainer, PlaceHolder, Image, ImageContainer } from './save-player-styles';
import Button from '../../atoms/button/button';
import Input from '../../atoms/input/input';
import { StyledLink } from '../../atoms/button/button.styles';

const SavePlayer: React.FC = () => {
    const [name, setName] = useState('');
    const [selectedImage, setSelectedImage] = useState<string>('');
    const navigate = useNavigate();

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSave = () => {
        const players = JSON.parse(localStorage.getItem('players') || '[]');

        const nextId = players.length > 0 ? players[players.length - 1].id + 1 : 1;

        const newPlayer = {
            id: nextId,
            name: name,
            avatar: selectedImage,
        };

        players.push(newPlayer);
        localStorage.setItem('players', JSON.stringify(players));

        navigate('/addplayers')
    };

    return (
        <Container>
            <Heading>Adicione um jogador!</Heading>
            <FormContainer>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder=" "
                        onChange={handleNameChange}
                        className={`text-input ${name ? 'filled' : ''}`}
                    />
                    <PlaceHolder>Nome</PlaceHolder>
                </InputContainer>
                <Description>Foto de perfil:</Description>
                <ImageContainer>
                    {['avatar1.png', 'avatar2.png', 'avatar3.png', 'avatar4.png', 'avatar5.png'].map((image) => (
                        <Image
                            key={image}
                            src={`${process.env.PUBLIC_URL}/images/${image}`}
                            alt="Avatar"
                            isSelected={selectedImage === image}
                            onClick={() => handleImageClick(image)}
                        />
                    ))}
                </ImageContainer>
            </FormContainer>
            <ButtonContainer>
                <StyledLink to='/addplayers'><Button className='outline'>Voltar</Button></StyledLink>
                <Button onClick={handleSave}>Salvar</Button>
            </ButtonContainer>
        </Container>
    );
};

export default SavePlayer;
