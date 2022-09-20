import React from 'react';
import Header from "../shared/header";
import Footer from "../shared/footer";
import { Outlet } from "react-router-dom";
import MainHero from "../shared/hero/main-hero";
import Home from "../pages/home";

const MainLayout = () => {
    return (
        <main>
            <Header />
            <div id={"content"} >
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};

export default MainLayout;