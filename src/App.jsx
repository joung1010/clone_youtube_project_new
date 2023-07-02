import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav/Nav";
import Videos from "./components/Videos/Videos";
import {useEffect, useState} from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from "./components/Root";

const router = createBrowserRouter([{
    path : '/',
    element: <Root/>,
    children:[
        {
            path:'/videos',
            element:<Videos/>
        }
    ]
}]);


function App({youtubeAPI}) {
  return (
      <RouterProvider router={router}/>
  );
}
export default App;
