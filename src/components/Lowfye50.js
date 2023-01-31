import React from "react"
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./nav/NavBar";
import { Contact } from "./contact/Contact";
import lowfye50black from "./images/lowfye50black.jpg"
import bandPic from "./images/bandPic.jpg"
import "./Lowfye50.css"
import { ApplicationViews } from "./views/ApplicationViews";
import { NavBarEpk } from "./nav/NavBarEpk";
import { Epk } from "./epk/Epk";
import { ContactEpk } from "./contact/ContactEpk";

export const Lowfye50 = () => (
    <Routes>
    <Route path="*" element={
            <>
                <NavBar />
                <ApplicationViews />
                <Contact />
            </>
		} />

    <Route path="/epk" element={
            <>
                <NavBarEpk />
                <Epk />
                <ContactEpk />
            </>
		} />
    </Routes>
)
