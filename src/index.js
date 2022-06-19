import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyled } from './Global.styled';
import { ThemeProvider } from 'styled-components';
import theme from './Theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
