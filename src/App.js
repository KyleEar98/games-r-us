import React,{useEffect} from "react";
//fetchng data from external api with axios
//practice using redux state management
//we are using rawg io to fetch our videogame data
import Home from './pages/Home';
import GlobalStyles from "./components/GlobalStyles";

function App() {

  return (
    <div className="App">
      <GlobalStyles />
        <Home />
    </div>
  );
}

export default App;
