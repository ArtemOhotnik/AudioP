import React from 'react'
import './CurrentMusic.css'

function CurrentMusic() {
    
    return (
        <div className="container">
            <div className="left-sidebar">
                <div className="search">
                    <img alt="#" src="https://img.icons8.com/ios-filled/16/search.png" className="search-icon" />
                    <input placeholder="Search" type="text"/>
                </div>
                {/* <h1 className="search-text">Search new songs!</h1> */}
                <div className="menu-items">
                    <div className="bottom-menu-rows">
                        <div className="icon"></div>
                        <span></span>
                    </div>
                    <div className="bottom-menu-rows">
                        <div className="icon"></div>
                        <span></span>
                    </div>
                    <div className="bottom-menu-rows">
                        <div className="icon"></div>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentMusic
