import React from 'react';
import GlobalStyles from './GlobalStyles';
import AppRouter from './router/router';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Footer } from './components/atoms/footer/footer.styles';

function App() {
  return (
    <div className="App">
      <Footer>Criado por Brennon Lima
        <a href='https://github.com/BrennonMLima' target="_blank" ><FaGithub size={15} /></a>
        <a href='https://www.linkedin.com/in/brennon-meira/' target="_blank"><FaLinkedin size={15} /></a>
      </Footer>
      <AppRouter />
      <GlobalStyles />
    </div>
  );
}

export default App;
