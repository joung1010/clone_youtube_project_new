import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav/Nav";
import Videos from "./components/Videos/Videos";
import {useEffect, useState} from "react";

function App({youtubeAPI}) {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        youtubeAPI.getPopularVideoList()
            .then(res => setVideos(res));
    }, []);

    const onHandleChange = (words) => {
        youtubeAPI.search(words)
            .then(res => setVideos(res));
    };

  return (
      <>
        <Nav onHandleChange={onHandleChange}/>
        <Videos videos={videos}/>
      </>
  );
}

export default App;
