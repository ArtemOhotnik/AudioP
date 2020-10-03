import React from 'react'
import './CurrentMusic.css'
import Musik from "../Musik/Musik"
import aone from '../StaticMusic/1.mp3'
import atwo from '../StaticMusic/2.mp3'
import athree from '../StaticMusic/3.mp3'
import afour from '../StaticMusic/4.mp3'
import afive from '../StaticMusic/5.mp3'
import asix from '../StaticMusic/6.mp3'
import aseven from '../StaticMusic/7.mp3'
import love1 from "../../1.png"
import love2 from "../../2.png"
import play from "../../3.png"
import pous from "../../4.png"
import axios from 'axios'


let index = localStorage.getItem('index')
const allAudios = [aone, atwo, athree, afour, afive,asix, aseven];


const source = allAudios[index - 1]
const song = new Audio(source)


class CurrentMusic extends React.Component{
    constructor(props){
        super(props)



        this.state = {
            songs: [
                {name: 'Black Beatles (Rae Sremmund)', duration: '4:51'},
                {name: 'The Box (Roddy Rich)', duration: '3:16'},
                {name: 'BOP (DaBaby)', duration: '2:42'},
                {name: 'Rockstar (Post Malone feat. 21 Savage)', duration: '3:38'},
                {name: 'Who Shots Jonny? (Tyla Yaweh)', duration: '2:45'},
                {name: 'Tossie Slide (Drake)', duration: '4:07'},
                {name: 'ROXANNE (Arizona Zervas)', duration: '2:44'},
            ],
            song: [],
            paused: true,
            likeChen: false,
            likeIndex: "",
            paus: play,
            like: love2,
            likeName: "",

        }
    }




    async componentDidMount() {
        const axiosGet = await axios.get("https://audiopl-5219a.firebaseio.com/Like.json")
        Object.values(axiosGet.data).forEach(item => {
            localStorage.setItem(`SongName${index}`, item)
            console.log(localStorage.getItem(`SongName${index}`))


        })

    }

    loadSong = window.onload = async event => {
        const axiosGet = await axios.get("https://audiopl-5219a.firebaseio.com/Like.json")
        const Data = axiosGet.data
        const FilterArr = []
        for(var i in Data){
            FilterArr.push(
                Data[i]
            )
        }



    }


    PauseHandler = () => {
        if(this.state.paused === true){
        song.play()
            window.navigator.vibrate(5);
        this.setState({
                          paused: false,
                          paus: pous
                      })
    }
    else if(this.state.paused === false){
        song.pause()
        this.setState({
            paused: true,
            paus: play
        })
    }
    }

    LikeHandler = async event => {
        const axiosGet = await axios.get("https://audiopl-5219a.firebaseio.com/Like.json")
        const NameSong = this.props.songinfo[index - 1].name
        const jsonLikeIndex = JSON.stringify(NameSong).replace('""', ' ').trim();
        if(this.state.likeChen === true){
            this.setState({
                likeChen: false,
                like: love2
            })

        }
        else if(this.state.likeChen === false){
            this.setState({
                likeChen: true,
                like: love1
            })
            await axios.post("https://audiopl-5219a.firebaseio.com/Like.json", jsonLikeIndex)
            const axiosGet = await axios.get("https://audiopl-5219a.firebaseio.com/Like.json")
            Object.values(axiosGet.data).forEach(item => {
                localStorage.setItem(`SongName${index}`, item)
                console.log(localStorage.getItem(`SongName${index}`))






            })

        }
    }



    render(){


    return  (
            
            <div className="container">
                <div className="left-sidebar">
                    <div className="search">
                        <img src="https://img.icons8.com/ios-filled/16/search.png" className="search-icon" alt="," />
                        <input placeholder="Search" type="text"/>
                    </div>
                    <div className="menu-items">
                        <div className="bottom-menu-rows">
                            <button style={{
                                background: 'none', border: "none",
                                outline: "none",
                            }}><img src="https://img.icons8.com/ios-glyphs/0.7x/like.png" alt=","/></button>
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
                            
                           {/*<buttonstyle={{background: 'none', border: "none",*/}
                           {/*    outline: "none",}}>*/}

                               <img  onClick={this.LikeHandler}  style={{marginRight: '5px', cursor: 'pointer', filter: "hue-rotate(0deg)"}}  src={this.state.like} alt=","/>

                           {/*</button>*/}
                            <div className="bar"></div>
                            <span>{this.props.songinfo[index - 1].duration}</span>
                        </div>
                        <div className="pauseAndPlay">
                            
                            <button>PREVIOUS</button>
                            <img onClick={this.PauseHandler} style={{ cursor: 'pointer' }} src={this.state.paus} alt=","/>
                            <button>NEXT</button>
    
                        </div>
    
                    </div>
                    <div className="yourPlaylist">
                    <h1>Your playlist</h1>

                       <Musik
                            name = {
                                localStorage.getItem("SongName")
                        }
                       />





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
