import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import page from "../page";
import Home from "../Home/page";
import Login from "../Login/page";
import Registro from "../Registro/page";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<page />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registro" element={<Registro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;