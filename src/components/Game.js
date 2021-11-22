import React from "react";

//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//15 redux
import { useDispatch } from "react-redux";
import {loadDetail} from '../actions/detailAction';

//12 extracting all games. after we want to fetch game details to send another api request to request game data
//each game we have gives an id. if we did rawg.io/games/321321(id number) it will give more info on the game
//go to api.js after
//go to home and style everything and create styledgame below
//create global styles
//
const Game = ({name, released, image, id}) =>{

    //15 load details we added id in props bc we passed it from home
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(id)); 
    }
    return(
        //15 when we click on a game dispatch loadDetail to get detail of that game by using its id
        //15 lets make another fetch for the screenshots in api.js since the actual api didnt include them
        
        <StyledGame onClick={loadDetailHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)` 
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.1);
    text-align: center;
    border-radius: 1rem;
    img{
        width: 100%; //make img fit all of grid
        height: 30vh; //make sure all imgs same size
        object-fit: cover; //make sure img proportional
    }
`;

export default Game;