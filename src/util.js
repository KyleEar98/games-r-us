//21 media resize

//resizeing it to save us space of not having such big pictures
export const smallImage = (imagePath,size) =>{
    const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace("media/screenshots",`media/resize/${size}/-/screenshots`)
    :imagePath.replace('/media/games',`/media/resize/${size}/-/games`)
    //checking path of url and matching it with screenshots
    //if it does then replace is with the size we want
    //else if we gave /media/games also replace it
    return image;
    //22 go to where to render our images like in Game.js
}