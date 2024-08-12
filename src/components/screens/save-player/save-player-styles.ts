import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 80%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: end;
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
    gap: 60px;
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
