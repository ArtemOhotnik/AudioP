import React from 'react';
//import Log from "./content/Log In/LogIn";
//import Register from "./content/Sign Up/singUp";
import Main from "./content/Main/Main";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CurrentMusic from './content/CurrentMusic/CurrentMusic'


function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <NavLink to="/current">To current</NavLink> */}
        {/* <Main/> */}
        {/*<Log />*/}
        {/*<Register />*/}

      </div>
      <Switch>
        <Route path="/current" component={CurrentMusic} />
        <Route path="/main" component={Main}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
