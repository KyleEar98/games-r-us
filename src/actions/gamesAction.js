//an action is an object that describes whats going to happen
import axios from "axios";
import {popularGamesURL,newGamesURL,upcomingGamesURL, searchGameURL} from '../api';

//10 action creator then we create Home.js to import this

export const loadGames = () => async (dispatch) =>{
    //dispatch any action we want
    //since we used thunk we must make this an async call and here we can dispatch any action we want

    //fetch axios
    const popularData = await axios.get(popularGamesURL()); //fetch popular games from url (api)
    const newGamesData = await axios.get(newGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    //every api call or async data we put await so it finishes getting the info before moving on

    dispatch({
        type: "FETCH_GAMES", //10 goes to reducer then in FETCHGAMES where we just return the state
        //since we dispatched with payloud, 
        //in gamereducer were setting popular to payload, we update the state

        payload: { 
            popular: popularData.data.results, //extracts the games
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,

        }
    })
}

export const fetchSearch = (game_name) => async(dispatch)=> {
    const searchGames = await axios.get(searchGameURL(game_name));

    dispatch({
        type: 'FETCH_SEARCHED',
        payload:{
            searched: searchGames.data.results,
        }
    })
}