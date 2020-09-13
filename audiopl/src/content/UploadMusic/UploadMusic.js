import React from 'react'
import './UploadMusic.css'

function UploadMusic() {
    return (
        <div className="container">
            <form className="main-block">
                <h1>Add Song</h1>
                <div className="song-name">
                    <span>Song name</span>
                    <input placeholder="Your name" type="text"/>
                </div>
                <div className="author-name">
                    <span>Your name</span>
                    <input placeholder="Song name" type="text"/>
                </div>
                <div className="select-song">
                    <button>Select</button>
                    <span>mp3</span>
                </div>
                <button className="add-button">Add</button>
            </form>
        </div>
    )
}

export default UploadMusic
