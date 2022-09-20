import React from 'react';
import MainLayout from "./main-layout";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/home";

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<div>About</div>} />
                    <Route path="contact" element={<div>Contact</div>} />
                </Route>
            </Routes>
        </>
    );
};

export default Layout;