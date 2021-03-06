//17 creating game detail that we want to rend out on screen
import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//22 
//22 next we will work on page transition from main page to clicking on a game in home.js
import { smallImage } from "../util";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
//17 we will render this in Home.js
//17 after go to app.js for react router
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({pathId}) =>{
    //20 exit detail
    const history = useHistory();
    const exitDetailHandler = (e) =>{
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            history.push('/')
            //20when we click on shadow exit out detail page and go back to home page and change url
            //21 next create a function that returns smaller image create util.js
        }
    }
      //GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

    //Get Stars
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push(<img alt="star" key={i} src={starFull}></img>);
          } else {
            stars.push(<img alt="star" key={i} src={starEmpty}></img>);
          }
        }
        return stars;
      };

    //Data
    const {screen,game, isLoading} = useSelector((state) => state.detail);//17extracting state.detail check detail state
    return(
        <>
        {/*19 when isloading switches to false then render all of this out  */}
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => ( //now we have access to platform data after putting data
                                <img key={data.platform.id} src={getPlatform(data.platform.name)}/>
                                //17 need key if we are mapping over something
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <img 
                    layoutId={`image ${pathId}`} 
                    src={smallImage(game.background_image,1280)} 
                    alt={game.background_image} />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results&&screen.results.map(screen=>(
                        <img src={smallImage(screen.image,1280)} key={screen.id} alt={screen.id} />
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
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
    z-index: 5;

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
    img{
        width: 1.5rem;
        height: 1.5rem;
        display:inline;
    }
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