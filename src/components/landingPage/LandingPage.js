import React from "react"
import lowfye50black from "../images/lowfye50black.jpg"
import bandPic from "../images/bandPic.jpg"
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
        <h2 text-align="center">BIO</h2>
        <Tour />
    </>
)