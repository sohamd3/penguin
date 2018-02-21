import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from "redux";
import { Provider } from "react-redux";

import './index.css';
import App from './App';

import reducer from './reducers/index'
import { loadState, saveState } from './localStorage'

const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(() => {
    saveState({
        reduceProfileData: {
            name: store.getState().reduceProfileData.name
        }
    });
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    
    document.getElementById('root')
);
registerServiceWorker();
