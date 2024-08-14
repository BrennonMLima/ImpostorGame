import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled.button`
  padding: 10px 20px;
  background: var(--amarelo);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
  color: black;

  & a{
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  &.outline {
    background-color: transparent;
    border: 1px solid var(--amarelo);
    color: var(--amarelo);
  }

  &.large-button{
    width: 80%;
    padding: 15px 20px;
  }
  
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;