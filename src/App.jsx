import './App.css';
import React, {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';
import Nav from "./components/nav/Nav";
import {YoutubeUtil} from "./service/youtubeUtil";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'

const youtubeAPI = new YoutubeUtil();
const queryClient = new QueryClient();

function App() {
    return (
        <>
            <Nav/>
            <QueryClientProvider client={queryClient}>
                <Outlet context={{youtubeAPI}}/>
            </QueryClientProvider>
        </>
    );
}

export default App;
