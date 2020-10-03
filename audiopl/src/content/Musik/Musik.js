import React from "react"

class Musik extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return(
            <div className="yourRow">
                <div className="yourPlayName">
                    <img src="https://img.icons8.com/material-rounded/1x/music--v2.png" alt=","/>
                    {this.props.name}
                </div>
                <div className="countSong">
                    <span>0</span>
                    <img src="https://img.icons8.com/material-outlined/1x/circled-play.png" alt=","/>
                </div>
            </div>
        )

    }
}

export default Musik




