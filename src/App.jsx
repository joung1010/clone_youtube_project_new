import './App.css';
import React  from "react";
import {Outlet} from 'react-router-dom';
import Nav from "./components/nav/Nav";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {YoutubeApiProvider} from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <Nav/>
            <YoutubeApiProvider>
                <QueryClientProvider client={queryClient}>
                    <Outlet/>
                </QueryClientProvider>
            </YoutubeApiProvider>
        </>
    );
}

export default App;
