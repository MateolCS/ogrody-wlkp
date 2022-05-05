import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from 'styled-components';
import GlobaStyles from './components/styles/Global';
const theme = {
  breakpoints: {
    mobile: '768px'
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobaStyles/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

