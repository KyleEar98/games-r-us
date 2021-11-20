
import { combineReducers } from "redux";
//takes multiple reducers and combines them into one
import gamesReducer from './gamesReducer';

const initState = {//default state
    name: '',
    isLogged: false,

};

const userReducer = (state=initState,action) =>{
    switch(action.type){
        default:
            return{...state};
    }
}

const rootReducer = combineReducers({ //5 after this we can add it to other index.js
    games: gamesReducer, //games is any name we want 
    user: userReducer,//7 games and users are seperate states. next talk about thunk in gamesreducer
    //thunk allows us to dispatch actions with async actions
    //when our app grows very large we will have a ton of reducers where we can keep track of
    //there is where redux comes in
})

export default rootReducer;

//action is an object that describes whats going to happen like FETCH_GAMES
//dispatch is us sending the action to the reducer to modify our data
//action creator is a function that returns an action