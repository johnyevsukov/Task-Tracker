import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { tasksTheme } from './theme/theme'
import { ThemeProvider } from 'styled-components'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ThemeProvider theme={tasksTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
