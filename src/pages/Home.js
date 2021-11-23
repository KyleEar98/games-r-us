import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import GameDetail from '../components/GameDetail'; //17
//Components
import Game from "../components/Game";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { newGamesURL } from "../api";
//18
import { useLocation } from "react-router";

//11 is this whole file go to Game.js after to print all games
//runs loadGames action in gamesAction where that then fetches games and sends it to reducer in gamesReducer

const Home = () =>{
    //18 get the current location we added link in Game.js
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];//split everytime there is a slash
    //returns an array [" ",game,"3213(id num)"] first item in array is the slash
    //we want the id so we get the 2nd element of array
    //18
    const dispatch = useDispatch();
    //when component loads add useEffect 
    useEffect(() =>{
      dispatch(loadGames());//loading state in redux store
//as soon as app renders, dispatch loadGames from gamesAction, which is the function in gamesAction.js
    }, [dispatch]);//only runs when dispatch happens (to get rid of error)
    //get data back from state. extract it with useSelector
    const {popular, newGames, upcoming } = useSelector((state) => state.games); 
    //extracting games newGames upcoming games data
    return(
        <GameList>
            <AnimateSharedLayout type="crossfade">
            <AnimatePresence>{pathId &&  <GameDetail pathId={pathId} /> }</AnimatePresence>
            {/* 22 must wrap the component we want to transition to and must have some kind of toggle
            we also must give some kind of id to both components we want to transition we do that in
            game.js */}
            {/* 17 gameDetail is the detail of the game pop up when we click on a game
             */}
            <h2>Upcoming games</h2>
            <Games>
                {upcoming.map(game => (//access to each game
                    //return a game component for each individual game
                    <Game name={game.name} 
                    released={game.released} 
                    id={game.id} 
                    image={game.background_image}
                    key={game.id} />
                    //passing info about game as props
                ))}
            </Games>
            <h2>Popular games</h2>
            <Games>
                {popular.map(game => (//access to each game
                    //return a game component for each individual game
                    <Game name={game.name} 
                    released={game.released} 
                    id={game.id} 
                    image={game.background_image}
                    key={game.id} />
                    //passing info about game as props
                ))}
            </Games>
            <h2>New games</h2>
            <Games>
                {newGames.map(game => (//access to each game
                    //return a game component for each individual game
                    <Game name={game.name} 
                    released={game.released} 
                    id={game.id} 
                    image={game.background_image}
                    key={game.id} />
                    //passing info about game as props
                ))}
            </Games>
            </AnimateSharedLayout>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 2rem 5rem;
    h2{
        padding-top: 5rem;
    }
`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    padding-top: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    //defining columns that repeats as many times as we need that will auto fit at minimum of 500px 
    //if theres not enough space then expand as much space as we can
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;