import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";
import { newGamesURL } from "../api";

//11 is this whole file go to Game.js after to print all games
//runs loadGames action in gamesAction where that then fetches games and sends it to reducer in gamesReducer

const Home = () =>{
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