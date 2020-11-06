import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import './SingUp.css'
import Terms from '../Terms/Terms'
import {NavLink} from 'react-router-dom'
import Axios from "axios";

function Register() {

    let haveError;

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setError] = useState(false)

    const registerUser = async e => {
        try{
            e.preventDefault()
            if(name.trim() == '' || password.trim() == ''){
                alert('Inputs can`t be empty!')
            }
            else{
                let userInfo = {
                    name,
                    password
                }
                const registerAxios = await Axios.post('https://audiopl-5219a.firebaseio.com/Users.json', JSON.stringify(userInfo))
                setName('')
                setPassword('')
            }
        }
        catch {
            console.log('err');
            setError(true)
        }
    }




    return(
        <div className="log">
            <div className="main-sign-block">
                <form>
                    <h1>Sign Up</h1>
                    <div className="your-name">
                        <span>Your name</span>
                        <input onChange={event => setName(event.target.value)} value={name} type="text" placeholder="Your name"/>
                    </div>
                    <div className="your-pass">
                        <span>Your password</span>
                        <input onChange={event => setPassword(event.target.value)} value={password} type="text" placeholder="Your password"/>
                    </div>
                    <span className="bottomSpan">Already have account? <NavLink to="/signin">Sign In</NavLink></span>
                    <button type="submit" onClick={registerUser}>Sing Up</button>
                </form>
            </div>
            <Switch>
                <Route path="/terms" component={Terms} />
            </Switch>
        </div>
    )
}

export default Register
