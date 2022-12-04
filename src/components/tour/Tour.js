import React from "react"
import "./Tour.css"

export const Tour = () => (
    <>
        <div  className="tourContainer">
            <h2 className="tourDateHeader">Tour Dates</h2>

            <div className="tourDates">
                <div className="tourDateContainer solid">
                    <div className="tourDateInfoBox">
                        <div className="tourDate day"><strong>27</strong></div>
                        <div className="tourDate month">January</div>
                        <div className="tourDate ocationName">Exit Inn</div>
                        <div className="tourDate locationCityState">Nashville, TN</div>
                    </div>
                    <div className="tourDateButtonContainer">
                        <button className="tourDateButton rsvp">RSVP</button>
                        <button className="tourDateButton tickets">Tickets</button>
                    </div>
                </div>
            </div>

            <div className="tourDates">
                <div className="tourDateContainer solid">
                    <div className="tourDateInfoBox">
                        <div className="tourDate day"><strong>15</strong></div>
                        <div className="tourDate month">February</div>
                        <div className="tourDate ocationName">Basement East</div>
                        <div className="tourDate locationCityState">East Nashville, TN</div>
                    </div>
                    <div className="tourDateButtonContainer">
                        <button className="tourDateButton rsvp">RSVP</button>
                        <button className="tourDateButton tickets">Tickets</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)