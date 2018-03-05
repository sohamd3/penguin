import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'

import './index.css';
import App from './App';

import rootReducer from './reducers/index'
// import { loadState, saveState } from './localStorage'

const log = (state) => (next) => (action) => {
    console.log("Logged Action: ", action)
    next(action)
}

const store = createStore(rootReducer, applyMiddleware(thunk, log));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    
    document.getElementById('root')
);
registerServiceWorker();
