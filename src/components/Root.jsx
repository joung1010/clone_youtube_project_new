import React, {useEffect, useState} from 'react';
import Nav from "./nav/Nav";
import Videos from "./Videos/Videos";
import {YoutubeUtil} from "../service/youtubeUtil";


const youtubeAPI = new YoutubeUtil();

function Root(props) {
    const [videos, setVideos] = useState([]);

    const onHandleChange = (videos) => {
        setVideos(videos);
    };

    return (
        <div>
            <Nav
                onHandleChange={onHandleChange}
                youtubeAPI={youtubeAPI}
            />
            <Videos videos={videos}
                    onHandleChange={onHandleChange}
                    youtubeAPI={youtubeAPI}
            />
        </div>
    );
}

export default Root;