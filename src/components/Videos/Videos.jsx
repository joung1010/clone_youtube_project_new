import React, {useEffect, useState} from 'react';
import Video from "../video/Video";
import './videos.css';

function Videos(props) {
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

    return (
        <main>
        <ul className='videos-list'>
            {
                videos.map(video => (
                    <li key={video.id} className='video-container'>
                        <Video
                            id={video.id}
                            snippet={video.snippet}
                        />
                    </li>
                ))
            }
        </ul>
        </main>
    );
}


export default Videos;