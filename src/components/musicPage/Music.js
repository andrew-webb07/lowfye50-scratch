import React from "react"
import youtube from "../images/pngwing.png"
import appleMusic from "../images/appleMusic.png"
import "./Music.css"

export const Music = () => (
    <>
        <div  className="musicContainer">
            {/* <h2 className="tourDateHeader">Tour Dates</h2> */}

            <div className="firstMusicItem">
                <a target="_blank" href="" className="musicIcon fab fa-spotify">Spotify</a>
            </div>

            <div>
                <a target="_blank" href="https://www.youtube.com/@lowfye5020"><img src={youtube} className="musicIcon fab"></img></a>
            </div>

            <div>
                <a target="_blank" href=""><img src={appleMusic} className="musicIcon fab"></img></a>
            </div>
        </div>
    </>
)