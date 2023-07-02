import './App.css';
import React, {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';
import {YoutubeUtil} from "./service/youtubeUtil";
import Nav from "./components/nav/Nav";


function App({youtubeAPI}) {
    return (
        <>
            <Nav/>
            <Outlet/>
        </>
    );
}

export default App;
