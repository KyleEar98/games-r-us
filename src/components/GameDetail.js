//17 creating game detail that we want to rend out on screen
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

//17wwe will render this in Home.js
const GameDetail = () =>{
    //Data
    const {screen,game} = useSelector((state) => state.detail);//17extracting state.detail check detail state
    return(
        <div className="card-shadow">
            <div className="detail">
                <div className="stats">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <div className="info">
                        <h3>Platforms</h3>
                        <div className="platforms">
                            {game.platforms.map(data => ( //now we have access to platform data after putting data
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                                //17 need key if we are mapping over something
                            ))}
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src={game.background_image} alt="" />
                </div>
                <div className="gallery">
                    {screen.results.map(screen=>(
                        <img src={screen.image} key={screen.id} alt="" />
                    ))}
                </div>
            </div>
        </div>
    );
};