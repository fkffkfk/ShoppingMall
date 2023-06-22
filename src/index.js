import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRouter from './AppRouter';

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
/*<div id="root">
<div class="App">
  <header class ="App-header">
    <img src="/static/media/logo.6ce24c58.svg" class="App-logo" alt="logo"></img>
      <p>Edit <code>src/App.js</code> and save to relohttps://eslint.org/docs/latest/rules/no-octal-escapead. </p>
      <a class="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
  </header>
</div>

</div>*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
