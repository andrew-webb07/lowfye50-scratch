import React from "react"
import lowfye50black from "../images/RedLowfye50.jpg"
import bandPic from "../images/musicVideoShootGreen.jpg"
import SITM from "../audio/STUCK_IN_THE_MIDDLE.mp3"
import honey_locust from "../audio/Honey_Locust.mp3"
import techRider from "../images/Lowfye50_Stage_Plot_4.png"
import { PhotoSection } from "./PhotoSection"
import SITMPic from "../images/SITM_artwork.jpg"
import "./Epk.css"

export const Epk = () => (
    <>
        <div className="logoContainer">
            <img src={lowfye50black} alt="logo" className="logo resize" />
        </div>
        <div className="logoContainer">
            <img src={bandPic} alt="bandPic" className="bandPic" />
        </div>
        <h1>BIO</h1>
        <div className="bioContainer">
            <h3 className="bio">Lowfye 50 is a Nashville based rock band storming the industry hot with ground breaking sound and deliverance. Each member being virtuosic with unique backgrounds makes for a perfect blend of chaos and soothe. The hard hitting band was produced and discovered by the rock industry’s very own guitarist Noah Henson. Alongside support from other names, the band tends to ride their own wave and flood the rock and metal world with their message. There first official single “Stuck In The Middle” is slated to be released in the new year of 2023 along with there first music video. This is a group prodigy that no one will see coming. 
            </h3>
        </div>

        <h1>MUSIC</h1>

        <div className="songs">
            <div className="mp3Box solid">
                <div className="track">Stuck In The Middle</div>
                <div className="audioTrack">
                {/* <audio controls><source src={SITM} type="audio/mpeg" /></audio> */}
                    <div>Available on all platforms!</div>
                    {/* <div>-</div> */}
                    <a target="_blank" href="https://orcd.co/dryqjrx" className="singleOut">
                        <img src={SITMPic} alt="SITM" className="preSavePhoto" />
                    </a> 
                </div>
            </div>
            <div className="mp3Box solid">
                <div className="track">Honey Locust</div>
                <div className="audioTrack">
                <audio controls><source src={honey_locust} type="audio/mpeg" /></audio>
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