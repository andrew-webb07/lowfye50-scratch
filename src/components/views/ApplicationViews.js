import { Route, Routes } from "react-router-dom"
import { LandingPage } from "../landingPage/LandingPage"
import { Tour } from "../tour/Tour"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="" element={ <LandingPage /> } />

            <Route path="/tour" element={ <Tour /> } />
        </Routes>
    )
}