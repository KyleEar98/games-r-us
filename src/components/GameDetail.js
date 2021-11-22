//17 creating game detail that we want to rend out on screen
import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

//17 we will render this in Home.js
//17 after go to app.js for react router
const GameDetail = () =>{
    //Data
    const {screen,game} = useSelector((state) => state.detail);//17extracting state.detail check detail state
    return(
        <CardShadow>
            <Detail>
                <Stats>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms&&game.platforms.map((data) => ( //now we have access to platform data after putting data
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                                //17 need key if we are mapping over something
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <img src={game.background_image} alt={game.background_image} />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results&&screen.results.map(screen=>(
                        <img src={screen.image} key={screen.id} alt={screen.id} />
                    ))}
                </div>
            </Detail>
        </CardShadow>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y:scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;  
    &::-weebkit-scrollbar{
        width: 0.5rem;
    }
    &::-weebkit-scrollbar-thumb{
        background-color: #ff7676; 
    }
    &::-weebkit-scrollbar-track{
        background: white;
    }

`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 10rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
`;

const Stats = styled(motion.div)`  
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`  
    text-align: center;
`;

const Platforms = styled(motion.div)`  
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`   
    margin-top: 5rem;
    img{
        width: 100%
    }
`;

const Description = styled(motion.div)`   
    margin: 5rem 0rem;
`;
export default GameDetail;