import React from "react"
import { Link } from "react-router-dom"
import LF50Logo from "../images/LF50Logo.JPEG"
import "./Nav.css"

export const NavBar = () => {
    return (
        <>
        <div className="navbarContainer">

            <div className="navbar__logo_item">
                    <Link className="" to="/">
                        <img src={LF50Logo} alt="logo" className="logoNav" />
                    </Link>
                </div>
            <ul className="navbar">
            
                {/* <div className="navbar__item">
                    <Link className="navbar__link" to="/">HOME</Link>
                </div> */}
                <li className="navbar__item">
                    <Link className="navbar__link" to="/music">MUSIC</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/tour">TOUR</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/store">STORE</Link>
                </li>
            </ul>
        </div>
        </>
    )
}