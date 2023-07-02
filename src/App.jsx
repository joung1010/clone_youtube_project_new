import './App.css';
import React, { useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';
import Nav from "./components/nav/Nav";
import {YoutubeUtil} from "./service/youtubeUtil";

const youtubeAPI = new YoutubeUtil();

function App() {
    return (
        <>
            <Nav/>
            <Outlet context={{youtubeAPI}}/>
        </>
    );
}

export default App;
