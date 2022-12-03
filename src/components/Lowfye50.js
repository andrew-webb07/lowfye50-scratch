import React from "react"
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./nav/NavBar";
import lowfye50black from "./images/lowfye50black.jpg"
import Band_pic from "./images/Band_pic.heic"
import "./Lowfye50.css"

export const Lowfye50 = () => (
    <Routes>
    <Route path="*" element={
            <>
                <NavBar />
                <div>
                    <img src={lowfye50black} alt="logo" className="logo" />
                </div>
                <div>
                    <img src={Band_pic} alt="logo" className="logo" />
                </div>
                <h2 text-align="center">BIO</h2>
            </>
		} />
    </Routes>
)

// export const Repairs = () => {
// 	return <Routes>
// 		<Route path="/login" element={<Login />} />
// 		<Route path="/register" element={<Register />} />

// 		<Route path="*" element={
// 			<Authorized>
// 				<>
// 					<NavBar />
// 					<ApplicationViews />
// 				</>
// 			</Authorized>

// 		} />
// 	</Routes>
// }
