

const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
}
const gamesReducer = (state=initState,action) =>{
    //defining how our data will look like
    switch(action.type){
        /*8 we cannot just do something like 
        axios.get('rawg.io/games').then(
            return data
        )  because this is asynchronous so we need to add thunk before doing this
        follow 8 below*/
        case "FETCH_GAMES"://if dispatch an action called FETCH_GAMES return what we have in state
            return{...state, //state comes from arguement which = initState 
                popular: action.payload.popular,
                 //updating popular state above after getting FETCH_games from gamesAction
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            
            }; //return all data in state initState
        case "FETCH_SEARCHED":
            return{
                ...state,
                searched: action.payload.searched,
            }
        default:
            return {...state}
    }
}

/*8 an action is an object that describes whats going to happen.
redux allows us to do asynchronous fetching in our actions
next go to main index to talk about thunk*/
//4 index.js in same directory will have combinereducers
export default gamesReducer;