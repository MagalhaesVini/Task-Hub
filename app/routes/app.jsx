import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/page";
import Login from "../Login/page";
import Registro from "../Registro/page";

const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item /> : <Login />

}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Private Item={Home} />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registro" element={<Registro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;