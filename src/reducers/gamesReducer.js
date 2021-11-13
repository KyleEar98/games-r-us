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
            return{...state} //return all data in state initState
        default:
            return {...state}
    }
}

export default gamesReducer;