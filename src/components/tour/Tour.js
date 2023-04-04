import React from "react"
import "./Tour.css"

import { getShows } from "../database/dataAccess.js";

const shows = getShows();

const date = new Date();
// date.setDate(date.getDate()-1)
// d.setDate(d.getDate()-5);

function getMonthName(monthNumber) {
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', { month: 'long' });
  }


console.log(date)
const sortedShows = shows.sort((show1, show2) => (Date.parse(show1.date) - Date.parse(show2.date)))

// const pastShows = sortedShows.filter(show => Date.parse(show.date) < date)
//     .sort((show1, show2) => (Date.parse(show2.date) - Date.parse(show1.date)));

const upcomingShows = sortedShows.filter(show => Date.parse(show.date) >= date)
    .sort((show1, show2) => (Date.parse(show1.date) - Date.parse(show2.date)))

const pastShows = sortedShows.filter(show => !upcomingShows.includes(show))
    .sort((show1, show2) => (Date.parse(show2.date) - Date.parse(show1.date)));

export const Tour = () => (
    <>
        <div  className="tourContainer">
            <h2 className="tourDateHeader">Tour Dates</h2>
            { shows.length > 0 
                ? 
                <>
                {upcomingShows.map(show => {
                    return (
                        <>
                        <div className="tourDates">
                            <div className="tourDateContainer solid">
                                <div className="tourDateInfoBox">
                                    <div className="tourDate day"><strong>{show.date.split('/')[1]}</strong> {getMonthName(Number(show.date.split('/')[0]))}</div>
                                    {/* <div className="tourDate month">{getMonthName(Number(show.date.split('/')[0]))}</div> */}
                                    <div className="tourDate locationName">{show.locationName}</div>
                                    <div className="tourDate locationCityState">{show.locationCityState}</div>
                                </div>
                                <div className="tourDateButtonContainer">
                                    <button className="tourDateButton rsvp">
                                        {show.eventRsvp ?
                                        <a target="_blank" href={show.eventRsvp}>RSVP</a>
                                        :
                                        <div>RSVP</div>
                                        }
                                    </button>
                                    <button className="tourDateButton tickets">
                                    {show.eventRsvp ?
                                        <a target="_blank" href={show.eventTickets}>TICKETS</a>
                                        :
                                        <div>TICKETS</div>
                                        }
                                    </button>
                                </div>
                            </div>
                        </div> 
                        </>
                    )
                })}

                {pastShows.length > 0 ? <h3 className="tourNoShowsHeader">Past Shows</h3> : ''}
                
                {pastShows.map(show => {
                    return (
                        <>
                        <div className="tourDates">
                            <div className="tourDateContainer solid">
                                <div className="tourDateInfoBox">
                                <div className="tourDate day"><strong>{show.date.split('/')[1]}</strong> {getMonthName(Number(show.date.split('/')[0]))}</div>
                                    <div className="tourDate locationName">{show.locationName}</div>
                                    <div className="tourDate locationCityState">{show.locationCityState}</div>
                                </div>
                                {/* <div className="tourDateButtonContainer">
                                    <button className="tourDateButton rsvp">
                                        <a target="_blank" href={show.eventRsvp}>RSVP</a>
                                    </button>
                                    <button className="tourDateButton tickets">
                                        <a target="_blank" href={show.eventTickets}>Tickets</a>
                                    </button>
                                </div> */}
                            </div>
                        </div> 
                        </>
                    )
                })}
                </>
                : <>
                    <div className="tourDates">
                        <div className="noShowsContainer solid">
                            <h3 className="noShowsHeader">There are no shows planned at this time</h3>
                        </div>
                    </div>
                </>}
        </div>
    </>
)