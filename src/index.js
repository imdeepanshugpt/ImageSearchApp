import React from 'react';
import ReactDOM from 'react-dom';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import { Provider } from 'react-redux';
import configStore from './store/storeConfig';

const store = configStore();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.querySelector('#root')
);

export { store };