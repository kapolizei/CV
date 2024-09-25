import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import HomeView from "./views/HomeView";
import TestView from "./views/TestView";


export default function AppRoutes () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeView/>} />
                    <Route path="/test" element={<TestView/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}