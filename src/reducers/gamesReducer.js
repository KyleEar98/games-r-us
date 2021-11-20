

const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
}
const gamesReducer = (state=initState,action) =>{
    //defining how our data will look like
    switch(action.type){
        case "FETCH_GAMES":
            return{...state, 
                popular: action.payload.popular, //updating popular state above
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            
            } //return all data in state initState
        default:
            return {...state}
    }
}

//an action is an object that describes whats going to happen


export default gamesReducer;