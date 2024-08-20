import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: end;
    position: fixed;
    bottom: 0;
    background-color: var(--preto);
    padding: 10px;
`
export const PlayersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 5px;
    justify-items: center;
    width: 80%;
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 80%;
`
export const PlaceHolder = styled.label`
position: absolute;
left: 10px;
padding: 5px;
top: 50%;
background: transparent;
transform: translateY(-50%);
transition: 0.2s ease all;
pointer-events: none;
color: #999;
`;

export const Image = styled.img<{ isSelected: boolean }>`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px;
    border: 3px solid ${({ isSelected }) => (isSelected ? 'var(--amarelo)' : 'var(--cinza)')};
    cursor: pointer;
    transition: border 0.3s ease;
    -webkit-tap-highlight-color: transparent;

    &:hover {
        border: 3px solid var(--amarelo);
    }
`;

export const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
    justify-items: center;
    width: 100%;
    margin-bottom: 50px;
`
export const InputContainer = styled.div`
position: relative;

.text-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    outline: none;

    &:focus {
        border-color: var(--amarelo);
    }

    &:focus + ${PlaceHolder},
    &:not(:placeholder-shown) + ${PlaceHolder} {
        top: 0;
        left: 10px;
        background: var(--preto);
        font-size: 12px;
        color: var(--amarelo);
    }
}
`;
