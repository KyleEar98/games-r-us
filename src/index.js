import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//redux
import {createStore, applyMiddleware, compose} from 'redux';//allows 2 params the reducer and devtools
import rootReducer from './reducers';
import { Provider } from 'react-redux';//connect react app to redux
import thunk from "redux-thunk";
import { BrowserRouter } from 'react-router-dom';//18
/*9 here we added thunk
since create store only holds 2 parameters so we cannot add thunk after REDUX DEVTOOLS.
so we need to combine 2 into 1 using applyMiddleware and compose
applymiddleware checks every action that is being dispatched and adds something inbetween the two
in this case thunk. 
compose combines multiple arguements
we just want to combine the window extension with thunk
after this our state in redux console should look good
now in we are going to create actions in actions folder */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//redux setup this will always be the same

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
  //takes reducers for things like popular games, navbar if its toggles on or off etc
  //3 create a reducer gamesreducer
//we will import our multiple reducers in rootRuducer that we will then put in createStore
)

//6 store = store is letting us use gameReducer, next add another reducer to other index.js
//we can just import gamereducer by itself but if we have more than one reducer which we will it wont work
//which is why we have a rootreducer that can have multiple reducers so we can import them at once
ReactDOM.render(
  <React.StrictMode>
    {/* add store as a prop */}
    <Provider store={store}> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
