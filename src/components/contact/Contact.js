import React from "react"
import "./Contact.css"

export const Contact = () => (
    <>
        <div className="contactContainer">
            <div className="contactSection">
                <div className="headerSection">
                    <h1>SHARE  -</h1>
                    <h1 className="lowfyeHashTag"><em>#Lowfye50</em></h1>
                </div>
                <div className="icons">
                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=lowfye50.com" className="fab fa-facebook"></a>

                    <a target="_blank" href="https://twitter.com/intent/tweet?text=lowfye50.com" className="fab fa-twitter"></a>

                    <a className="fa fa-envelope" href="mailto:?subject=Lowfye50&body=Check%20out%20this%20band%20at%20%3A%20lowfye50.com"></a>
                </div>
            </div>

            <div className="contactSection">
                <h1>FOLLOW</h1>
                <div className="icons">
                <a target="_blank" href="https://www.instagram.com/lowfye50/" className="fab fa-instagram"></a>
                <a target="_blank" href="https://www.tiktok.com/@lowfye50?lang=en" className="fab fa-tiktok"></a>
                <a target="_blank" href="" className="fab fa-spotify"></a>
                </div>
            </div>

            <div className="contactSection">
                <h1>CONTACT</h1>
                <div className="icons">
                <a className="fa fa-envelope" href="mailto:lowfye50band@gmail.com?subject=Interested%20in%20Lowfye50"></a>
                </div>
            </div>
        </div>
    </>
)