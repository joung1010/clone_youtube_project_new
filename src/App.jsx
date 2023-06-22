import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav/Nav";
import Videos from "./components/Videos/Videos";
import {useEffect, useState} from "react";

function App() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&hl=ko&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_KEY}`, requestOptions)
            .then(response => response.json())
            .then(res => setVideos(res.items));
    }, []);

    const onHandleChange = (items) => {
        setVideos(items);
    };

  return (
      <>
        <Nav onHandleChange={onHandleChange}/>
        <Videos videos={videos}/>
      </>
  );
}

export default App;
