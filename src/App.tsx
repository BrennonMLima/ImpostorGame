import React from 'react';
import GlobalStyles from './GlobalStyles';
import AppRouter from './router/router';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Footer } from './components/atoms/footer/footer.styles';

function App() {
  return (
    <div className="App">
      <Footer>Criado por Brennon Lima <FaGithub size={15} /><FaLinkedin size={15} /></Footer>
      <AppRouter />
      <GlobalStyles />
    </div>
  );
}

export default App;
