import React from "react"
import lowfye50black from "../images/RedLowfye50.jpg"
import bandPic from "../images/musicVideoShootGreen.jpg"
import these_horns from "../audio/these_horns.wav"
import techRider from "../images/Lowfye50_4_piece_w_Jared.png"
import { PhotoSection } from "./PhotoSection"
import { PromoVideo } from "./PromoVideo"
import SITMPic from "../images/SITM_artwork.jpg"
import "./Epk.css"
import { Bio } from "../Bio"

export const Epk = () => (
    <>
        <div className="logoContainer">
            <img src={lowfye50black} alt="logo" className="logo resize" />
        </div>
        <div className="logoContainer">
            <img src={bandPic} alt="bandPic" className="bandPic" />
        </div>
        <h1>BIO</h1>
        <Bio />

        {/* <h1>VIDEOS</h1> */}
        <PromoVideo />


        <h1>MUSIC</h1>

        <div className="songs">
            <div className="mp3Box solid">
                <div className="track">Stuck In The Middle</div>
                <div className="audioTrack">
                {/* <audio controls><source src={SITM} type="audio/mpeg" /></audio> */}
                    {/* <div>Available on all platforms!</div> */}
                    <iframe className="spotifySingleEpk" src="https://open.spotify.com/embed/track/5Xu0COMu0mCtKzPdtpePaz?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </div>

            <div className="mp3Box solid">
                <div className="track">These Horns</div>
                <div className="audioTrack">
                <iframe className="spotifySingleEpk" src="https://orcd.co/01gxklx" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <audio controls><source src={these_horns} type="audio/mpeg" /></audio>
                </div>
            </div>
        </div> 
        <div className="mp3Box solid"></div>

        <PhotoSection />

        <div className="mp3Box solid"></div>

        <h1>TECH RIDER</h1>

        <div className="techRiderContainer">
            <img src={techRider} alt="bandPic" className="bandPic" />
        </div>
        <div className="addMargin"></div>

    </>
)