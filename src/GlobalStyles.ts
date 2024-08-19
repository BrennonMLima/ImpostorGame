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
--cinza: #212528;
--amarelo: #FDCA40;
--azul-escuro: #011936;
--azul-claro: #3772FF;
}

    h1,h2,h3,span,p,svg{
        background-color: transparent;
    }

    @keyframes fadeInSlideLeft {
    from {
        opacity: 0;
        transform: translateX(50%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes pulseIn {
    0% {
        transform: scale(0.8);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.pulse-animation {
    animation: pulseIn 0.1s linear;
}

`;

