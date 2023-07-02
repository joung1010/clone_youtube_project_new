import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFound from "./page/NotFound";
import Videos from "./components/Videos/Videos";
import VideoDetail from "./components/videoDetail/VideoDetail";
import {YoutubeUtil} from "./service/youtubeUtil";

const root = ReactDOM.createRoot(document.getElementById('root'));
const youtubeAPI = new YoutubeUtil();

const router = createBrowserRouter([
    { // root page
        path:'/',
        element:<App youtubeAPI={youtubeAPI}/>,
        errorElement: <NotFound/>,
        children:[
            // index: true -> 인덱스가 최상위 / 인경우
            {index:true, element:<Videos/>},
            {path:'/videos', element:<Videos/>},
            {path:'/videos/:keyword', element:<Videos/>},
            {path:'/videos/watch/:videoId', element:<VideoDetail/>},
        ]

    },

]);

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
