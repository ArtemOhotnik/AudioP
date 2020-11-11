import React from "react";
import './LogIn.css'
import { NavLink } from 'react-router-dom'


function Log() {
    return(


        <div className="Log">

            <form>

            <div className="blockLog">
                <h1 className="LogIn">Sign In</h1>
                <p className="p1">Your name</p>
                <input placeholder="Your name" className="input1"/>
                <p className="p2">Your password</p>
                <input placeholder="Your password" className="input2" />
                <span>Don`t have account? <NavLink to="/signup">Sign up</NavLink></span>
                <button className="buttonL">Log In</button>
            </div>

            </form>




        </div>
    )
}

export default Log

