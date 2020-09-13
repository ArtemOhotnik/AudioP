import React from 'react';
//import Log from "./content/Log In/LogIn";
//import Register from "./content/Sign Up/singUp";
import Main from "./content/Main/Main";
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import CurrentMusic from './content/CurrentMusic/CurrentMusic'
import SignUp from './content/Sign Up/SignUp'
import LogIn from './content/Log In/LogIn'
import UploadMusic from './content/UploadMusic/UploadMusic';


function App() {
  return (
    <>
        {/* <Main/> */}
      
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/current" component={CurrentMusic} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin"  component={LogIn} />
        <Route path="/upload" component={UploadMusic} />
      </Switch>
    </>
  );
}

export default App;
