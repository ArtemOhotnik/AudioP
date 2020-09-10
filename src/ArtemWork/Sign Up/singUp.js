import React from "react";
import './SingUp.css'

function Register() {
    return(
        <div className="Log">
            <div className="blockLog">
                <p className="LogIn">Sing Up</p>
                <p className="p1">Your name</p>
                <input className="input1"/>
                <p className="p2">Password</p>
                <input className="input2"/>
                <p className="p3">Password repeat</p>
                <input className="input3"/>

                <p className="accept"><input type="checkbox" name="a"/> i accept the terms of service</p>

               <button className="buttonS">Sing Up</button>
            </div>

        </div>
    )
}

export default Register
