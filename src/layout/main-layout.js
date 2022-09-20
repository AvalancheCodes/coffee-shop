import React from 'react';
import Header from "../shared/header";
import Footer from "../shared/footer";
import { Outlet } from "react-router-dom";
import MainHero from "../shared/hero/main-hero";

const MainLayout = () => {
    return (
        <main>
            <Header />
            <MainHero   />
            <div id={"content"} className={"container pt-4"}>
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};

export default MainLayout;