import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//redux
import {createStore, applyMiddleware, compose} from 'redux';//allows 2 params the reducer and devtools
import rootReducer from './reducers';
import { Provider } from 'react-redux';//connect react app to redux
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//redux setup

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
  //takes reducers for things like popular games
//we will import our multiple reducers in rootRuducer that we will then put in createStore
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
