import React from "react";
import './Main.css'


function Main() {
    return(

        <div className="main">

            <header>
                <div className="logo">#</div>

                <div className="buttonHeader">
                    <button className="reg">SIGN UP</button>
                    <button className="sign" >SIGN IN</button>
                </div>
            </header>

            <h1>We recommend to listen</h1>

            <div className="Box">

                <div className="Box1">
                <p className="Song1">Full song name</p>

                    <div>
                <p className="Time1">0:00</p>
                <img alt={"#"} src="https://img.icons8.com/material-sharp/24/000000/pause.png" className="pause1"/>
                </div>

            </div>

                <div className="Box1">
                <p className="Song2">Full song name</p>

                    <div>
                <p className="Time2">0:00</p>
                <img alt={"#"} src="https://img.icons8.com/material-sharp/24/000000/pause.png" className="pause2"/>
                </div>

            </div>

                <div className="Box1">
                <p className="Song3">Full song name</p>

                    <div>
                <p className="Time3">0:00</p>
                <img alt={"#"} src="https://img.icons8.com/material-sharp/24/000000/pause.png" className="pause3"/>
                </div>

            </div>


                <div className="Box1">
                <p className="Song4">Full song name</p>

                    <div>
                <p className="Time4">0:00</p>
                <img alt={"#"} src="https://img.icons8.com/material-sharp/24/000000/pause.png" className="pause4"/>
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