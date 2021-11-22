//14 making detailReduction after making its action
// we need to hook it up in index.js in this dir
/*16*/
const initialState = {game: {}, screen:{} };

const detailReducer = (state=initialState,action) => {
    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state,
                game:action.payload.game, //updating game to action.payload.game
                //comes from action where we add payload.game
                
                //16 go to action after 
                screen: action.payload.screen,
            };
            default: 
                return{...state}
    }
}

export default detailReducer;