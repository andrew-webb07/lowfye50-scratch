import React, { useState } from 'react';
import { Link } from "react-router-dom"
import SpiderTBack from "../images/spiderT-back.png"
import SpiderTFront from "../images/spiderT-front.png"
import "./Store.css"

export const Store = () => {

    // Add an event listener to the button to change the image on the back side
    // flipCard.addEventListener('click', () => {
    // flipCardBack.src = SpiderTBack; // Replace 'image2.jpg' with the path to your second image
    // });

    // const handleClick = () => {
    //     // Handle the click event here
    //     alert('Button clicked!');
    //   };

    function ImageSwitcher() {
        const [isFrontImage, setIsFrontImage] = useState(true);
        
        const handleClick = () => {
            setIsFrontImage(!isFrontImage);
        };
        
        return (
            <div className="flip-card-inner" onClick={handleClick}>
              <div className="flip-card" style={{ display: isFrontImage ? 'block' : 'none' }}>
                <img src={SpiderTFront} alt="Front Image" />
                <div style={{ textAlign: 'center' }}>{isFrontImage ? '1 of 2' : '2 of 2'}</div>
                
              </div>
              <div className="flip-card" style={{ display: isFrontImage ? 'none' : 'block' }}>
                <img src={SpiderTBack} alt="Back Image" />
                <div style={{ textAlign: 'center' }}>{isFrontImage ? '1 of 2' : '2 of 2'}</div>
              </div>
            </div>
          );
    }
    
    return (
    <>
        <div  className="storeContainer">
            <h2 className="tourDateHeader">OFFICIAL LOWFYE50 MERCHANDISE</h2>
            <div className="solid"></div>
            {/* <div className="noMerchBox">
                <div className="noMerch">MERCH WILL BE AVAILABLE SOON!</div>
            </div> */}

            <div className="merchItemsContainer">
                <div className="merchItemBox">
                    {ImageSwitcher()}
                    
                    <button className='merchButton'><Link className="" to="/store/request/spiderTshirt">PURCHASE</Link></button>
                </div>
            </div>
        </div>
    </>
)
}