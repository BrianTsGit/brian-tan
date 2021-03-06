import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import foodReducer from './store/reducers/food';
import miscInterestReducer from './store/reducers/miscInterest';
import uiReducer from './store/reducers/userInterface';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //allow us to use redux dev tools

const rootReducer = combineReducers({
   food: foodReducer,
   miscInterest: miscInterestReducer,
   ui: uiReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
