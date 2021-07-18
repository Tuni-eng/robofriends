import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card'; // kjo hiqet pasi vejm CardList
//import CardList from './CardList'; // per mos me perserit ato posht tek <React.stricktMode> // kjo hiqet pasi vejm CardList
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//import { robots } from './robots'; //mrena kllapva fusim dhe te tjera qe nuk jan export default por nga ky file. Edhe kte e fusim tek App.js



ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();