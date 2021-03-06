import React from 'react';
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
import {NavLink} from 'react-router-dom'


let index = localStorage.getItem('index')
const allAudios = [aone, atwo, athree, afour, afive,asix, aseven];

let source = allAudios[index - 1]
let song = new Audio(source)

const testUploadArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];


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
            localStor: [],
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
        const axiosGetUlpoad = await axios.get("https://audiopl-5219a.firebaseio.com/upload.json")
        Object.values(axiosGetUlpoad.data).forEach((item, index) => {
            localStorage.setItem(`upload${index}`, item)
            console.log(localStorage.getItem(`upload${index}`))
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
    loadSongUpl = window.onload = async event => {
        const axiosGetUlpoad = await axios.get("https://audiopl-5219a.firebaseio.com/upload.json")
        const DataUp = axiosGetUlpoad.data
        const FilterArr = []
        for(var i in DataUp){
            FilterArr.push(
                DataUp[i]
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

    UploadHandler = async event => {

        }


    LikeHandler = async event => {
        const NameSong = this.props.songinfo[index - 1].name
        const jsonLikeIndex = JSON.stringify(NameSong).replace('""', ' ').trim();
     if(this.state.likeChen === false){
            this.setState({
                likeChen: true,
                like: love1
            })
         await axios.post("https://audiopl-5219a.firebaseio.com/Like.json", jsonLikeIndex)
         const axiosGet = await axios.get("https://audiopl-5219a.firebaseio.com/Like.json")
         window.location.reload(true);
         Object.values(axiosGet.data).forEach(item => {
             localStorage.setItem(`SongName${index}`, item)
             console.log(localStorage.getItem(`SongName${index}`))
         })
     }

     else if(this.state.likeChen === true){
            this.setState({
                likeChen: false,
                like: love2
            })
         localStorage.removeItem(`SongName${index}`);

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
                    <NavLink to="/favourite"><span>Liked Songs</span></NavLink>
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
                    
                    <button onClick={this.testVolume}>PREVIOUS</button>
                    <img onClick={this.PauseHandler} onClick={this.UploadHandler} style={{ cursor: 'pointer' }} src={this.state.paus} alt=","/>
                    <button>NEXT</button>

                </div>

           </div>
            <div className="yourPlaylist">
            <h1>Your playlist</h1>


                { localStorage.getItem(`SongName1`) ?<Musik
                    name={
                        localStorage.getItem(`SongName1`) ? localStorage.getItem(`SongName1`) : null
                    }
                    local={
                        localStorage.getItem(`SongName1`)
                    }
                /> : null}
                {localStorage.getItem(`SongName2`) ? <Musik
                    name={
                        localStorage.getItem(`SongName2`) ? localStorage.getItem(`SongName2`) : null
                    }
                    local={
                        localStorage.getItem(`SongName2`)
                    }
                /> : null}
                {localStorage.getItem(`SongName3`) ? <Musik
                    name={
                        localStorage.getItem(`SongName3`) ? localStorage.getItem(`SongName3`) : null
                    }
                    local={
                        localStorage.getItem(`SongName3`)
                    }
             />: null}
                {localStorage.getItem(`SongName4`) ? <Musik
                    name={
                        localStorage.getItem(`SongName4`) ? localStorage.getItem(`SongName4`) : null
                    }
                    local={
                        localStorage.getItem(`SongName4`)
                    }
                /> : null}
                {localStorage.getItem(`SongName5`) ? <Musik
                    name={
                        localStorage.getItem(`SongName5`) ? localStorage.getItem(`SongName5`) : null
                    }
                    local={
                        localStorage.getItem(`SongName5`)
                    }
                /> : null}
                {localStorage.getItem(`SongName6`) ? <Musik
                    name={
                        localStorage.getItem(`SongName6`) ? localStorage.getItem(`SongName6`) : null
                    }
                    local={
                        localStorage.getItem(`SongName6`)
                    }
                /> : null}
                {localStorage.getItem(`SongName7`) ?<Musik
                    name={
                        localStorage.getItem(`SongName7`) ? localStorage.getItem(`SongName7`) : null
                   }
                    local={
                        localStorage.getItem(`SongName7`)
                    }
                /> : null}
                {testUploadArray.map((item, index) => (
                    localStorage.getItem(`upload${index}`) ? <Musik
                        name={
                            localStorage.getItem(`upload${index}`) ? localStorage.getItem(`upload${index}`) : null
                    }
                        local={
                            localStorage.getItem(`upload${index}`)
                        }
                    /> : null
                ))}

                <div className="likedSongWrapper">
                </div>



            </div>
         <div className="sound-footer">
                <div className="sound">
                    <img src="https://img.icons8.com/ios-filled/0.4x/room-sound.png" className="sound-" alt=","/>
                    <input onChange={event => song.volume = event.target.value / 100} className="slider-sound" min="0" max="100" type="range"/>
                </div>
            </div>
        </div>
    </div>



          )
        }
    }
export default CurrentMusic


