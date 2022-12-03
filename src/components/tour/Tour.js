import React from "react"
import lowfye50black from "../images/lowfye50black.jpg"
import bandPic from "../images/bandPic.jpg"
import "./Tour.css"

export const Tour = () => (
    <>
        <div  className="tourContainer">
            <h2 className="tourDateHeader">Tour Dates</h2>

            <div className="tourDates">
                <div className="tourDateContainer solid">
                    <div className="tourDate day">27</div>
                    <div className="tourDate month">January</div>
                    <div className="tourDate ocationName">Exit Inn</div>
                    <div className="tourDate locationCityState">Nashville, TN</div>
                    <button className="tourDateButton rsvp">RSVP</button>
                    <button className="tourDateButton tickets">Tickets</button>
                </div>
            </div>

            <div></div>
        </div>
    </>
)