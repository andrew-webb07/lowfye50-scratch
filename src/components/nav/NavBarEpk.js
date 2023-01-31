import React from "react"
import { Link } from "react-router-dom"
import LF50Logo from "../images/LF50Logo.JPEG"
import "./Nav.css"

export const NavBarEpk = () => {
    return (
        <>
        <div className="navbarContainer">

            <div className="navbar__logo_item">
                    {/* <Link className="" to="/"> */}
                        <img src={LF50Logo} alt="logo" className="logoNav" />
                    {/* </Link> */}
                </div>
            <ul className="navbarEpk">
                    <Link className="navbar__item_epk" to="/">GO TO LOWFYE50 WEBSITE</Link>
            </ul>
        </div>
        </>
    )
}