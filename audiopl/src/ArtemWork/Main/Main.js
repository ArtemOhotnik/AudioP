import React from "react";
import './Main.css'


function Main() {
    return(
        <div className="main">
            <button className="reg">Sing Up</button>
            <button className="Sing">Sign In</button>

            <div className="Box">
                <p className="Song1">Full song name</p>
                <p className="Time1">0:00</p>
                <img src="https://img.icons8.com/material-sharp/24/000000/pause.png" className="pause1"/>
                <br className="br1"/>

                <p className="Song2">Full song name</p>
                <p className="Time2">0:00</p>
                <img src="https://img.icons8.com/material-sharp/24/000000/pause.png" className="pause2"/>


                <p className="Song3">Full song name</p>
                <p className="Time3">0:00</p>
                <img src="https://img.icons8.com/material-sharp/24/000000/pause.png" className="pause3"/>


                <p className="Song4">Full song name</p>
                <p className="Time4">0:00</p>
                <img src="https://img.icons8.com/material-sharp/24/000000/pause.png" className="pause4"/>



            </div>
                <div className="footer">
                    <p className="footer_text">Copyright © , 2020, NAME.</p>
                </div>
        </div>
    )
}

export default Main