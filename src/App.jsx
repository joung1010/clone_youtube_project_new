import './App.css';
import React, {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';
import Nav from "./components/nav/Nav";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import Youtube from "./service/api/youtube";
import TestYoutube from "./service/api/testYoutube";

const youtube = new Youtube();
// const youtube =new TestYoutube();
const queryClient = new QueryClient();

function App() {
    return (
        <>
            <Nav/>
            <QueryClientProvider client={queryClient}>
                <Outlet context={{youtube}}/>
            </QueryClientProvider>
        </>
    );
}

export default App;
