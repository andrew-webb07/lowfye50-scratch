import React from "react"
import lowfye50black from "../images/RedLowfye50.jpg"
import bandPic from "../images/musicVideoShootGreen.jpg"
import { Tour } from "../tour/Tour"
import "./LandingPage.css"

export const LandingPage = () => (
    <>
        <div className="logoContainer">
            <img src={lowfye50black} alt="logo" className="logo resize" />
        </div>
        <div className="logoContainer">
            <img src={bandPic} alt="logo" className="bandPic" />
        </div>
        <div className="bioContainer">
            <h3 className="bio">Lowfye 50 is a Nashville based rock band storming the industry hot with ground breaking sound and deliverance. Each member being virtuosic with unique backgrounds makes for a perfect blend of chaos and soothe. The hard hitting band was produced and discovered by the rock industry’s very own guitarist Noah Henson. Alongside support from other names, the band tends to ride their own wave and flood the rock and metal world with their message. There first official single “Stuck In The Middle” is slated to be released in the new year of 2023 along there first music video. This is a group prodigy that no one will see coming. 
            </h3>
        </div>
        <Tour />
    </>
)