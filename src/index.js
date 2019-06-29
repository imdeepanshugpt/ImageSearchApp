import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(<App/>, document.querySelector('#root'));