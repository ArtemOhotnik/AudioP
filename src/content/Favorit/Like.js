import React from 'react';
import './Like.css'
import LikedMusic from '../LikedMusicItem/LikedMusic'
import axios from 'axios';

const mapArray = [1,2,3,4,5,6,7,8]


const Favourite = props => {

    const test = async () => {
        const getSongs = await axios.get('https://audiopl-5219a.firebaseio.com/Like.json')
        .then(response => {
            console.log(response.data);
            Object.values(response.data).forEach(value => {
                console.log(value);
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="box">
            <header>
                <h1 onClick={test}>Your liked songs</h1>
            </header>
            <div className="likedSongWrapper">
                {mapArray.map(item => localStorage.getItem(`SongName${item}`) !== null 
                ? 
                <LikedMusic key={item} removeItem={async id => {
                    localStorage.removeItem(`SongName${item}`);
                    await axios.delete(`https://audiopl-5219a.firebaseio.com/Like.json/`)
                    window.location.reload(true)
                }} name={localStorage.getItem(`SongName${item}`)}
                 /> 
                 :
                null)}
            </div>
        </div>
    )
}

export default Favourite;