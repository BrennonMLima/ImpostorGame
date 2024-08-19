import styled, { keyframes } from 'styled-components';

export const Image = styled.img`
  max-width: 60%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: end;

    &.guess{
      flex-direction: column;
      align-items: center;
    }
`
export const TutorialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`
const slideInLeft = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
`;

const slideInRight = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`;


export const AnimatedTutorialContainer = styled(TutorialContainer) <{ direction: string }>`
    animation: ${({ direction }) =>
        direction === 'next' ? slideInLeft : slideInRight} 0.2s forwards;
`;
