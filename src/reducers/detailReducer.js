//14 making detailReduction after making its action
// we need to hook it up in index.js in this dir
/*16*/
const initialState = {game: {platforms:[]}, screen:{results:[]}, isLoading: true };
//18
const detailReducer = (state=initialState,action) => {
    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state,
                game:action.payload.game, //updating game to action.payload.game
                //comes from action where we add payload.game
                
                //16 go to action after 
                screen: action.payload.screen,//send payload with screen
                isLoading: false, //18 after we get detail, isLoading will be false
                //now we can use isloading in our app to do whatever we want
                //if we want to display a piece of text, we can say if its loading dont display it
                //19 add this in detailaction.js
            };
        case "LOADING_DETAIL":
            return{
                ...state,
                isLoading: true,
            }
            default: 
                return{...state}
    }
}

export default detailReducer;