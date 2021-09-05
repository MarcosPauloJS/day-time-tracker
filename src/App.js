import { ThemeProvider } from 'styled-components';
import { CustomTheme, GlobalStyles } from './styledConfig'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
        <GlobalStyles />

      <h1>Hello Day time tracker !!!</h1>
  </ThemeProvider>
  );
}

export default App;
