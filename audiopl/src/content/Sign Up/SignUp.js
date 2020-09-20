import React from "react";
import { Route, Switch } from "react-router-dom";
import './SingUp.css'
import Terms from '../Terms/Terms'

function Register() {
    return(
        <div className="log">
            <div className="main-sign-block">
                <form>
                    <h1>Sign Up</h1>
                    <div className="your-name">
                        <span>Your name</span>
                        <input type="text" placeholder="Your name"/>
                    </div>
                    <div className="your-pass">
                        <span>Your password</span>
                        <input type="text" placeholder="Your password"/>
                    </div>
                    <div className="pass-repeat">
                        <span>Repeat password</span>
                        <input type="text" placeholder="Repeat password"/>
                    </div>
                    <button type="submit">Sing Up</button>
                </form>
            </div>
        <Switch>
            <Route path="/terms" component={Terms} />
        </Switch>
        </div>
    )
}

export default Register
