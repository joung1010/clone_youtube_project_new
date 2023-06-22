import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {YoutubeUtil} from './service/youtubeUtil'

const root = ReactDOM.createRoot(document.getElementById('root'));
const youtubeAPI = new YoutubeUtil();

root.render(
  <React.StrictMode>
    <App youtubeAPI={youtubeAPI}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
