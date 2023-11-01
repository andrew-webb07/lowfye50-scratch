import { Route, Routes } from "react-router-dom"
import { LandingPage } from "../landingPage/LandingPage"
import { Music } from "../musicPage/Music"
import { Store } from "../store/Store"
import { RequestForm } from "../store/RequestForm"
import { Tour } from "../tour/Tour"
import { Epk } from "../epk/Epk"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="" element={ <LandingPage /> } />

            <Route path="/tour" element={ <Tour /> } />

            <Route path="/music" element={ <Music /> } />

            <Route path="/store" element={ <Store /> } />

            <Route path="/store/request/:item" element={ <RequestForm /> } />

            <Route path="/epk" element={ <Epk /> } />
        </Routes>
    )
}