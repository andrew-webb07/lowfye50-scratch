import React from "react"
import { createRoot } from 'react-dom/client' 
import { Lowfye50 } from "./components/Lowfye50"
import { BrowserRouter } from "react-router-dom"
import './index.css';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <Lowfye50 />
    </BrowserRouter>
)
