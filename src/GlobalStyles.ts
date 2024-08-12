import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
}
html, body {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    background-color: var(--preto);
}

.App{
    height: 100vh;
    padding : 20px;
}
*, button, input {
border: 0;
outline: 0;
font-family: 'Roboto Mono', sans-serif;
}

:root {
--background: #161a1d ;
--preto: #0F0F0F; 
--cinza: #2D2E2E;
--amarelo: #FDCA40;
--azul-escuro: #011936;
--azul-claro: #3772FF;
}

    h1,h2,h3,span,p,svg{
        background-color: transparent;
    }

.action-icon{
    cursor: pointer;
    margin-left: 10px;
    font-size: 18px;
    &:hover {
        color: var(--azul-escuro);
    }
}
`;

