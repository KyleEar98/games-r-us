import React,{useEffect} from "react";
//fetchng data from external api with axios
//practice using redux state management
//we are using rawg io to fetch our videogame data
import Home from './pages/Home';
import GlobalStyles from "./components/GlobalStyles";
import {Route, Routes} from 'react-router-dom';
//18 in index.js we must wrap our app in browserrouter for route to work

function App() {

  return (
    <div className="App">
      <GlobalStyles />

        <Route path={['/game/:id',"/"]}>
        {/*18 when our route says /, render out home component
        but when route says /game/id, we are still rendering home component
        in Home.js we will import uselocation */}
          <Home />
        </Route> 

    </div>
  );
}

export default App;
