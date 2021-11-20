import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";

//11
//runs loadGames action in gamesAction where that then fetches games and sends it to reducer in gamesReducer
const Home = () =>{
    const dispatch = useDispatch();
    //when component loads add useEffect 
    useEffect(() =>{
      dispatch(loadGames());
//as soon as app renders, dispatch loadGames from gamesAction, which is the function in gamesAction.js
    }, [dispatch]);//only runs when dispatch happens (to get rid of error)
    //get data
    const {games, newGames, upcoming } = useSelector((state) => state.games); //get access to popular games and upcoming
    console.log(games);
    return(
        <GameList>
            <h2>Upcoming games</h2>
            <Games>
                {upcoming.map(game => (
                    //return a game component for each individual game
                    <Game />
                ))}
            </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    
`;
const Games = styled(motion.div)`
    
`;

export default Home;