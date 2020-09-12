import React from 'react';
//import Log from "./content/Log In/LogIn";
//import Register from "./content/Sign Up/singUp";
import Main from "./content/Main/Main";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CurrentMusic from './content/CurrentMusic/CurrentMusic'
import SignUp from './content/Sign Up/SignUp'
import LogIn from './content/Log In/LogIn'


function App() {
  return (
    <BrowserRouter>
      <>
        <Main/>
      </>
      <Switch>
        <Route path="/current" component={CurrentMusic} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin"  component={LogIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
