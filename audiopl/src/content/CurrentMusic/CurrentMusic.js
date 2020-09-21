import React from 'react'
import './CurrentMusic.css'
import aone from '../StaticMusic/1.mp3'
import atwo from '../StaticMusic/2.mp3'
import athree from '../StaticMusic/3.mp3'
import afour from '../StaticMusic/4.mp3'
import afive from '../StaticMusic/5.mp3'
import asix from '../StaticMusic/6.mp3'
import aseven from '../StaticMusic/7.mp3'


let index = localStorage.getItem('index')
const allAudios = [aone, atwo, athree, afour, afive,asix, aseven];

const source = allAudios[index - 1]
const song = new Audio(source)



class CurrentMusic extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            paused: true,
            paus: 'https://img.icons8.com/material-outlined/2.5x/circled-play.png',
        }
    }

    render(){
    return (
            
            <div className="container">
                <div className="left-sidebar">
                    <div className="search">
                        <img src="https://img.icons8.com/ios-filled/16/search.png" className="search-icon" alt="," />
                        <input placeholder="Search" type="text"/>
                    </div>
                    <div className="menu-items">
                        <div className="bottom-menu-rows">
                            <img src="https://img.icons8.com/ios-glyphs/0.7x/like.png" alt=","/>
                            <span>Liked Songs</span>
                        </div>
    
                        <div className="bottom-menu-rows">
                            <img src="https://img.icons8.com/metro/0.7x/music-record.png" alt=","/>
                            <span>Artists</span>
                        </div>
    
                        <div className="bottom-menu-rows">
                            <img src="https://img.icons8.com/ios-glyphs/0.7x/test-account.png" alt=","/>
                            <span>My account</span>
                        </div>
    
                    </div>
                </div>
                <div className="songInfo">
                    <div className="songPlayInfo">
                    <span style={{fontSize: '28px'}} className="song-name">{this.props.songinfo[index - 1].name}</span>
                        <div className="progressBar">
                            
                            <img style={{marginRight: '5px', cursor: 'pointer'}} src="https://img.icons8.com/ios-glyphs/0.6x/like.png" alt=","/>
                            <div className="bar"></div>
                            <span>{this.props.songinfo[index - 1].duration}</span>
                        </div>
                        <div className="pauseAndPlay">
                            
                            <button>PREVIOUS</button>
                            <img onClick={() => { 
                                if(this.state.paused === true){
                                    song.play()
                                    this.setState({
                                        paused: false,
                                        paus: 'https://img.icons8.com/ios/50/000000/pause-squared.png'
                                    })
                                }
                                else if(this.state.paused === false){
                                    song.pause()
                                    this.setState({
                                        paused: true,
                                        paus: 'https://img.icons8.com/material-outlined/2.5x/circled-play.png'
                                    })
                                }
                            }} style={{ cursor: 'pointer' }} src={this.state.paus} alt=","/>
                            <button>NEXT</button>
    
                        </div>
    
                    </div>
                    <div className="yourPlaylist">
                    <h1>Your playlist</h1>

                        <div className="yourRow">
                            <div className="yourPlayName">
                                <img src="https://img.icons8.com/material-rounded/1x/music--v2.png" alt=","/>
                                <span>Song name</span>
                            </div>
                            <div className="countSong">
                                <span>0:00</span>
                                <img src="https://img.icons8.com/material-outlined/1x/circled-play.png" alt=","/>
                            </div>
                        </div>
    
                        <div className="yourRow">
                            <div className="yourPlayName">
                                <img src="https://img.icons8.com/material-rounded/1x/music--v2.png" alt=","/>
                                <span>Song name</span>
                            </div>
                            <div className="countSong">
                                <span>0:00</span>
                                <img src="https://img.icons8.com/material-outlined/1x/circled-play.png" alt=","/>
                            </div>
                        </div>
    
                        <div className="yourRow">
                            <div className="yourPlayName">
                                <img src="https://img.icons8.com/material-rounded/1x/music--v2.png" alt=","/>
                                <span>Song name</span>
                            </div>
                            <div className="countSong">
                                <span>0:00</span>
                                <img src="https://img.icons8.com/material-outlined/1x/circled-play.png" alt=","/>
                            </div>
                        </div>
    
                        <div className="yourRow">
                            <div className="yourPlayName">
                                <img src="https://img.icons8.com/material-rounded/1x/music--v2.png" alt=","/>
                                <span>Song name</span>
                            </div>
                            <div className="countSong">
                                <span>0:00</span>
                                <img src="https://img.icons8.com/material-outlined/1x/circled-play.png" alt=","/>
                            </div>
                        </div>
    
                        <div className="yourRow">
                            <div className="yourPlayName">
                                <img src="https://img.icons8.com/material-rounded/1x/music--v2.png" alt=","/>
                                <span>Song name</span>
                            </div>
                            <div className="countSong">
                                <span>0:00</span>
                                <img src="https://img.icons8.com/material-outlined/1x/circled-play.png" alt=","/>
                            </div>
                        </div>
    
                    </div>
                    <div className="sound-footer">
                        <div className="sound">
                            <img src="https://img.icons8.com/ios-filled/0.4x/room-sound.png" className="sound-" alt=","/>
                            <input onChange={e => console.log(e.target.value)} className="slider-sound" min="0" max="100" type="range"/>
                        </div>
                    </div>
                </div>
            </div>
          )
        }
    }
export default CurrentMusic
