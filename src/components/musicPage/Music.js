import React from "react"
import youtube from "../images/pngwing.png"
import appleMusic from "../images/appleMusic.png"
import SITM from "../images/SITM_artwork.jpg"
import "./Music.css"
import bandPic from "../images/street_pic_2024.jpg"

export const Music = () => (
    <>
        <div className="musicContainer">
            {/* <div className=""> */}
                <img src={bandPic} alt="bandPic" className="bandPicMusicPage" />
            {/* </div> */}

            <div  className="iconContainer">
                {/* <h2 className="tourDateHeader">Tour Dates</h2> */}

                {/* <div className="firstMusicItem">
                    <a target="_blank" href="https://orcd.co/dryqjrx" className="musicIcon fab preSave"><img src={SITM} alt="bandPic" className="preSavePhoto" />PRE-SAVE</a>
                </div> */}

                {/* <div className="firstMusicItem">
                    <a target="_blank" href="https://orcd.co/dryqjrx" className="musicIcon fab preSave">PRE-SAVE</a>
                </div> */}

                <div>
                    <a target="_blank" href="https://open.spotify.com/artist/72ZHgiAkpuDJC9P2C2HGZI?si=T9yidNLCQzeM20oDpu-epA" className="musicIcon fab fa-spotify">Spotify</a>
                </div>

                <div>
                    <a target="_blank" href="https://www.youtube.com/@lowfye5020"><img src={youtube} className="musicIcon fab"></img></a>
                </div>

                <div>
                    <a target="_blank" href="https://music.apple.com/us/artist/lowfye-50/1513025358"><img src={appleMusic} className="musicIcon fab"></img></a>
                </div>

                {/* <iframe className="spotifySingle" src="https://open.spotify.com/embed/track/5Xu0COMu0mCtKzPdtpePaz?utm_source=generator" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}
            </div>
        </div>
    </>
)