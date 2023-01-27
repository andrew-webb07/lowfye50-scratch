import React from "react"
import lowfye50black from "../images/RedLowfye50.jpg"
import bandPic from "../images/musicVideoShootGreen.jpg"
import SITM from "../audio/STUCK_IN_THE_MIDDLE.mp3"
import honey_locust from "../audio/Honey_Locust.mp3"
import techRider from "../images/Lowfye50_Stage_Plot.png"
import { Tour } from "../tour/Tour"
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

        <div className="songs">
            <div className="mp3Box solid">
                <div className="">Stuck In The Middle</div>
                <audio controls><source src={SITM} type="audio/mpeg" /></audio>
            </div>
            <div className="mp3Box solid">
                <div className="tourDate month">Honey Locust</div>
                <audio controls><source src={honey_locust} type="audio/mpeg" /></audio>
            </div>
        </div> 
        <div className="mp3Box solid"></div>

        <h1>Tech Rider</h1>

        <div className="techRiderContainer">
            <img src={techRider} alt="bandPic" className="bandPic" />
        </div>
        <div className="mp3Box solid"></div>

    </>
)