import React from "react";
import './Main.css'
import { NavLink } from 'react-router-dom'


class Main extends React.Component{

    render(){
       

        return(
        <>
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
                    {this.props.songinfo.map((song, index) => {
                        return(
                            <div className="Box1" key={index}>
                                <p>{song.name}</p>
                                    <div>
                                        <p className="Time">{song.duration}</p>
                                        <a
                                            href="/current"><img style={{marginTop: '5px'}} onClick={() => localStorage.setItem('index', parseInt(index) + 1)}
                                             alt={"#"} src="https://img.icons8.com/material-outlined/1x/circled-play.png"
                                              className="pause4"/>
                                        </a>
                                    </div>
                            </div>
                        )
                    })
                        
                    }
                   
    
 
                    </div>
    
                </div>
                <div className="footer_text">
                <footer>
                    <p >Copyright © , 2020, NAME.</p>
                </footer>
            </div>
            </div>
        </>
        )
    }
}

export default Main