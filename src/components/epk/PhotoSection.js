import React from "react"
import CafeCoco from "../images/Cafe_coco.jpg"
import Cobra from "../images/Cobra_pic.jpg"
import drumPic from "../images/drum_pic_cobra.jpg"
import casey_BB from "../images/casey_BB.jpg"
import "./Epk.css"

export const PhotoSection = () => (
    <>
    <h1>PHOTOS</h1>

    <div className="photoContainer">
        <a href={CafeCoco} target="_blank"><img src={CafeCoco} alt="bandPic" className="epkPhoto" /></a>
        <a href={Cobra} target="_blank"><img src={Cobra} alt="bandPic" className="epkPhoto" /></a>
        <a href={drumPic} target="_blank"><img src={drumPic} alt="bandPic" className="epkPhoto" /></a>
        <a href={casey_BB} target="_blank"><img src={casey_BB} alt="bandPic" className="epkPhoto" /></a>
    </div>
    </>
)