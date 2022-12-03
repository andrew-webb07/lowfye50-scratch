import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">HOME</Link>
            </li>
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
    )
}