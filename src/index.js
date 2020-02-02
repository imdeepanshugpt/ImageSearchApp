import React from 'react';
import ReactDOM from 'react-dom';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './store/storeConfig';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.querySelector('#root'));