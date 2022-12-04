import React from "react"
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./nav/NavBar";
import { Contact } from "./contact/Contact";
import lowfye50black from "./images/lowfye50black.jpg"
import bandPic from "./images/bandPic.jpg"
import "./Lowfye50.css"
import { ApplicationViews } from "./views/ApplicationViews";

export const Lowfye50 = () => (
    <Routes>
    <Route path="*" element={
            <>
                <NavBar />
                <ApplicationViews />
                <Contact />
            </>
		} />
    </Routes>
)
