import React from "react";
import './Main.css'
import {NavLink} from 'react-router-dom'


function Main() {
    return(

        <div className="main">

            <header>
                <div className="logo">#</div>

                <div className="buttonHeader">
                    <button className="reg"><NavLink style={{textDecoration: 'none'}} to="/signup">SIGN UP</NavLink></button>
                    <button className="sign" ><NavLink style={{textDecoration: 'none', color: 'white'}} to="/signin">SIGN IN</NavLink></button>
                </div>
            </header>
            <div style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h1 style={{marginBottom: '10px'}}>We recommend to listen</h1>

                <div className="Box">

                    <div className="Box1">
                    <p className="Song1">Full song name</p>

                        <div>
                    <p className="Time1">0:00</p>
                    <img alt={"#"} src="https://img.icons8.com/material-outlined/1x/circled-play.png" className="pause1"/>
                    </div>

                </div>

                    <div className="Box1">
                    <p className="Song2">Full song name</p>

                        <div>
                    <p className="Time2">0:00</p>
                    <img alt={"#"} src="https://img.icons8.com/material-outlined/1x/circled-play.png" className="pause2"/>
                    </div>

                </div>

                    <div className="Box1">
                    <p className="Song3">Full song name</p>

                        <div>
                    <p className="Time3">0:00</p>
                    <img alt={"#"} src="https://img.icons8.com/material-outlined/1x/circled-play.png" className="pause3"/>
                    </div>

                </div>


                <div className="Box1">
                    <p className="Song4">Full song name</p>

                    <div>
                    <p className="Time4">0:00</p>
                    <img alt={"#"} src="https://img.icons8.com/material-outlined/1x/circled-play.png" className="pause4"/>
                    </div>

                </div>
            </div>

            </div>

            <div className="footer_text">
            <footer>
                <p >Copyright © , 2020, NAME.</p>
            </footer>
        </div>
        </div>
    )
}

export default Main