//an action is an object that describes whats going to happen
import axios from "axios";
import {popularGamesURL,newGamesURL,upcomingGamesURL} from '../api';

//10 action creator then we create Home.js to import this

export const loadGames = () => async (dispatch) =>{
    //dispatch any action we want
    //since we used thunk we must make this an async call and here we can dispatch any action we want

    //fetch axios
    const popularData = await axios.get(popularGamesURL()); //fetch popular games from url
    const newGamesData = await axios.get(newGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    //every api call or async data we put await so it finishes getting the info before moving on

    dispatch({
        type: "FETCH_GAMES", //goes to reducer then in FETCHGAMES where we just return the state
        //since we dispatched with payloud, 
        //in gamereducer weare setting popular to payload, we update the state

        payload: {
            popular: popularData.data.results, //extracts the games
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,

        }
    })
}