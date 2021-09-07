import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CustomTheme, GlobalStyles } from './styledConfig'
import { Home } from './componentes/pages';

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <GlobalStyles />
      <Home/>
  </ThemeProvider>
  );
}

export default App;
