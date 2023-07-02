import React, {useEffect, useState} from 'react';
import {useParams,useOutletContext} from 'react-router-dom';
import Video from "../video/Video";
import './videos.css';


function Videos() {
    const [videos, setVideos] = useState([])
    const {keyword} = useParams();
    const {youtubeAPI} = useOutletContext();

    useEffect(() => {
        if (keyword) {
            youtubeAPI.search(keyword).then(res => setVideos(res));
        } else {
            youtubeAPI.getPopularVideoList()
                .then(res => setVideos(res));
        }
    }, [keyword]);

    return (
        <main>
            <ul className='videos-list'>
                {
                    videos && videos.map(video => (
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