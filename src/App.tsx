import React from 'react';
import GlobalStyles from './GlobalStyles';
import InitialScreen from './components/screens/initial-screen/initial-screen';
import AppRouter from './router/router';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <GlobalStyles />
    </div>
  );
}

export default App;
