import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 20px;
  border: 0;
  background: var(--amarelo);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
  color: black;

  &:focus {
    outline: none;
  }

  &.outline {
    background-color: transparent;
    border: 1px solid var(--amarelo);
    color: #fff;
  }
`;
