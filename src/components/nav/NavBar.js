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
                    <Link className="navbar__item" to="/music">MUSIC</Link>
                    <Link className="navbar__item" to="/tour">TOUR</Link>
                    <Link className="navbar__item" to="/store">STORE</Link>
            </ul>
        </div>
        </>
    )
}