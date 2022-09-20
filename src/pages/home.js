import React from 'react';
import MainHero from "../shared/hero/main-hero";
import {Outlet} from "react-router-dom";
import Spirit from "../shared/spirit/spirit";
import Menu from "../shared/menu";

const Home = () => {
    return (
        <>
            <MainHero   />
            <Spirit />
            <Menu />
        </>
    );
};

export default Home;