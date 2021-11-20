//an action is an object that describes whats going to happen
import axios from "axios";
import {popularGamesURL,newGamesURL,upcomingGamesURL} from '../api';

//action creator

export const loadGames = () => async (dispatch) =>{
    //dispatch any action we want

    //fetch axios
    const popularData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    //every api call or async data we put await so it finishes getting the info before moving on

    //can also do
    // axios.get(popularGamesURL())
    // .then(data=>{
    // })

    dispatch({
        type: "FETCH_GAMES", //goes to reducer then in FETCHGAMES where we just return the state
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,

        }
    })
}