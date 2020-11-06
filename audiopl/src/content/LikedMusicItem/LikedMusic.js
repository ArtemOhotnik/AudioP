import React from 'react'
import './LikedMusic.css'

const LikedMusic = ({ name, removeItem }) => {
    return (
        <div className="row">
            <span>{name}</span>
            <img onClick={() => removeItem()} src="https://img.icons8.com/fluent-systems-filled/1x/delete-forever.png" />
        </div>
    )
}

export default LikedMusic
