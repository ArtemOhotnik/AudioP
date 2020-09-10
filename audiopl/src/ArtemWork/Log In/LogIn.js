import React from "react";
import './LogIn.css'

function Log() {
    return(
        <div className="Log">
            <div className="blockLog">
                <p className="LogIn">Log In</p>
                <p className="p1">Your name</p>
                <input className="input1"/>
                <p className="p2">Your password</p>
                <input className="input2"/>
                <button className="buttonL">Log In</button>
            </div>

        </div>
    )
}

export default Log

