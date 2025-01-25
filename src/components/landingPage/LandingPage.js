import React from "react"
import lowfye50black from "../images/RedLowfye50.jpg"
import bandPic from "../images/parking_garage_pic.jpeg"
import { Tour } from "../tour/Tour"
import "./LandingPage.css"
import { Bio } from "../Bio"

export const LandingPage = () => (
    <>
        <div className="logoContainer">
            <img src={lowfye50black} alt="logo" className="logo resize" />
        </div>
        <div className="logoContainer">
            <img src={bandPic} alt="bandPic" className="bandPic" />
        </div>
        <Bio />
        <Tour />
    </>
)