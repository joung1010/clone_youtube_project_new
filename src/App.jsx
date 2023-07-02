import './App.css';
import React, {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';
import {YoutubeUtil} from "./service/youtubeUtil";


const youtubeAPI = new YoutubeUtil();

function App() {
  return (
      <>
        <Outlet/>
      </>
  );
}
export default App;
