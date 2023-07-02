import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav/Nav";
import Videos from "./components/Videos/Videos";
import {useEffect, useState} from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from "./components/Root";
import VideoDetail from "./components/videoDetail/VideoDetail";

const router = createBrowserRouter([{
    path : '/',
    element: <Root/>,
    children:[
        {
            path:'/videos',
            element:<Videos/>
        },{
            path: 'videos/:videoId',
            element:<VideoDetail/>
        }
    ]
}]);


function App({youtubeAPI}) {
  return (
      <RouterProvider router={router}/>
  );
}
export default App;
