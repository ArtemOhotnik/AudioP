import axios from 'axios'
import React, { useRef } from 'react'
import './UploadMusic.css'
import pous from "../../4.png";
import play from "../../3.png";

function UploadMusic() {



    async function getFileName(event) {
        const choosenFile = event.target.files[0].name
        localStorage.setItem('UploadSong', choosenFile)
        await axios.post('https://audiopl-5219a.firebaseio.com/upload.json', JSON.stringify(choosenFile))
        .then(res => console.log('succes'))
        .catch(err => console.log(err))
    }



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
                <input onChange={getFileName} type="file" accept=".mp3, .wav"/>
                <button onClick={event => alert("Пісня додана")} className="add-button">Add</button>
            </form>
        </div>
    )
}


export default UploadMusic
