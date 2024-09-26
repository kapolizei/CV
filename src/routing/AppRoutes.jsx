import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import HomeView from "./views/HomeView";
import TestView from "./views/TestView";
import AirAlertApi from "../components/AirAlertApi";


export default function AppRoutes () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeView/>} />
                    <Route path="/test" element={<TestView/>} />
                    <Route path="/api" element={<AirAlertApi/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}