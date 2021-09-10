import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import CreateCour from './Components/Pages/CreateCour';
//import Login from './Components/Authentification/Login';
import reportWebVitals from './reportWebVitals';
//import ListCours from './Components/Pages/ListCours';
import App from './Components/Pages/App';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
