import React from "react"

class Musik extends React.Component {


    render() {
        return(
            <div className="yourRow">
                <div className="yourPlayName">
                    {this.props.local ? <img src="https://img.icons8.com/material-rounded/1x/music--v2.png" alt=","/> : null}
                    {this.props.name}
                </div>
                <div className="countSong">
                    {this.props.local ? <img src="https://img.icons8.com/material-outlined/1x/circled-play.png" alt=","/> : null}
                </div>
            </div>
        )

    }
}

export default Musik




