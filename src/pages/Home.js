import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";
const Home = () =>{
    const dispatch = useDispatch();
    //when component loads add useEffect 
    useEffect(() =>{
      dispatch(loadGames());
      //as soon as app renders, dispatch loadGames, which is the function in gamesAction.js
    }, [dispatch]);//only runs when dispatch happens (to get rid of error)
    //get data
    const {games, newGames, upcoming } = useSelector((state) => state.games); //get access to popular games and upcoming
    console.log(games);
    return(
        <div>
            <h1>home</h1>
        </div>
    )
}

export default Home;