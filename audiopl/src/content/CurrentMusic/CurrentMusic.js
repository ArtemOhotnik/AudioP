import React from 'react'
import './CurrentMusic.css'

function CurrentMusic() {
    
    return (
        <div className="container">

            <div className="left-sidebar">
                <div className="search">
                    <img src="https://img.icons8.com/ios-filled/16/search.png" className="search-icon" />
                    <input placeholder="Search" type="text"/>
                </div>

                <span className="search-text">Search new songs!</span>
                <div className="menu-items">
                    <div className="bottom-menu-rows">
                        <img src="https://img.icons8.com/ios-glyphs/0.7x/like.png" alt=""/>
                        <span>Liked Songs</span>
                    </div>

                    <div className="bottom-menu-rows">
                        <img src="https://img.icons8.com/metro/0.7x/music-record.png" alt=""/>
                        <span>Artists</span>
                    </div>

                    <div className="bottom-menu-rows">
                        <img src="https://img.icons8.com/ios-glyphs/0.7x/test-account.png" alt=""/>
                        <span>My account</span>
                    </div>

                </div>
            </div>
            <div className="songInfo">
                <div className="songPlayInfo">

                    <span className="song-name">SONG NAME</span>
                    <div className="progressBar"></div>
                    <div className="pauseAndPlay">

                        <button>PREVIOUS</button>
                        <img style={{cursor: 'pointer'}} src="https://img.icons8.com/material-outlined/2.5x/circled-pause.png" alt=""/>
                        <button>NEXT</button>

                    </div>

                </div>
                <div className="yourPlaylist">

                    <div className="yourRow">
                        <div className="yourPlayName">
                            <img src="https://img.icons8.com/material-rounded/1x/music--v2.png" alt=""/>
                            <span>Song name</span>
                        </div>
                        <div className="countSong">
                            <span>0:00</span>
                            <img src="https://img.icons8.com/material-outlined/1x/circled-play.png" alt=""/>
                        </div>
                    </div>

                    <div className="yourRow">
                        <div className="yourPlayName">
                            <img src="https://img.icons8.com/material-rounded/1x/music--v2.png" alt=""/>
                            <span>Song name</span>
                        </div>
                        <div className="countSong">
                            <span>0:00</span>
                            <img src="https://img.icons8.com/material-outlined/1x/circled-play.png" alt=""/>
                        </div>
                    </div>

                    <div className="yourRow">
                        <div className="yourPlayName">
                            <img src="https://img.icons8.com/material-rounded/1x/music--v2.png" alt=""/>
                            <span>Song name</span>
                        </div>
                        <div className="countSong">
                            <span>0:00</span>
                            <img src="https://img.icons8.com/material-outlined/1x/circled-play.png" alt=""/>
                        </div>
                    </div>

                    <div className="yourRow">
                        <div className="yourPlayName">
                            <img src="https://img.icons8.com/material-rounded/1x/music--v2.png" alt=""/>
                            <span>Song name</span>
                        </div>
                        <div className="countSong">
                            <span>0:00</span>
                            <img src="https://img.icons8.com/material-outlined/1x/circled-play.png" alt=""/>
                        </div>
                    </div>

                    <div className="yourRow">
                        <div className="yourPlayName">
                            <img src="https://img.icons8.com/material-rounded/1x/music--v2.png" alt=""/>
                            <span>Song name</span>
                        </div>
                        <div className="countSong">
                            <span>0:00</span>
                            <img src="https://img.icons8.com/material-outlined/1x/circled-play.png" alt=""/>
                        </div>
                    </div>

                </div>
                <div className="sound-footer">
                    <div className="sound">
                        <img src="https://img.icons8.com/ios-filled/0.4x/room-sound.png" className="sound-" alt=""/>
                        <input className="slider-sound" type="range"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentMusic
