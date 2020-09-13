import React from "react";
import './LogIn.css'

function Log() {
    return(


        <div className="Log">

            <form>

            <div className="blockLog">
                <h1 className="LogIn">Sign In</h1>
                <p className="p1">Your name</p>
                <input className="input1"/>
                <p className="p2">Your password</p>
                <input className="input2"/>
                <button className="buttonL">Log In</button>
            </div>

            </form>




        </div>
    )
}

export default Log

