import axios from "axios"
import { gameDetailsURL,gameScreenshotURL } from "../api"

//13creating new action and then we have to make a reducer for this
export const loadDetail = (id) => async (dispatch) =>{
    //pass id to gameDetailsURL when we dispatch loadDetail
    const detailData = await axios.get(gameDetailsURL(id));
    const screenShotData = await axios.get(gameScreenshotURL(id));//api request
    dispatch({
        type: "GET_DETAIL",
        payload:{
            game: detailData.data, //to access api
            screen: screenShotData.data,
            //16 screenShotData from the url after create Gamedetail.js
        }
    })
}