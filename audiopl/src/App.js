import React from 'react';
import Main from "./content/Main/Main";
import { Switch, Route} from 'react-router-dom'
import CurrentMusic from './content/CurrentMusic/CurrentMusic'
import SignUp from './content/Sign Up/SignUp'
import Favorite from "./content/Favorit/Like";
import LogIn from './content/Log In/LogIn'
import UploadMusic from './content/UploadMusic/UploadMusic';

class App extends React.Component{
    state = { // State
      songs: [
          {name: 'Black Beatles (Rae Sremmund)', duration: '4:51'},
          {name: 'The Box (Roddy Rich)', duration: '3:16'},
          {name: 'BOP (DaBaby)', duration: '2:42'},
          {name: 'Rockstar (Post Malone feat. 21 Savage)', duration: '3:38'},
          {name: 'Who Shots Jonny? (Tyla Yaweh)', duration: '2:45'},
          {name: 'Tossie Slide (Drake)', duration: '4:07'},
          {name: 'ROXANNE (Arizona Zervas)', duration: '2:44'},
      ]
  }
  render(){
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main songinfo={this.state.songs}/>
        </Route>
        <Route path="/current" >
          <CurrentMusic
              songinfo={this.state.songs}
              songkeys={this.state.songSrcKeys}
          />
        </Route>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin"  component={LogIn} />
        <Route path="/upload" component={UploadMusic} />
        <Route  path="/favorit" component={Favorite} />
      </Switch>
    </>
  )
  }
}

export default App;
