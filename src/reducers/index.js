
import { combineReducers } from "redux";
//takes multiple reducers and combines them into one
import gamesReducer from './gamesReducer';

const initState = {
    name: '',
    isLogged: false,

};

const userReducer = (state=initState,action) =>{
    switch(action.type){
        default:
            return{...state};
    }
}

const rootReducer = combineReducers({
    games: gamesReducer, //games is any name we want 
    user: userReducer,
})

export default rootReducer;