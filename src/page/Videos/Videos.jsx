import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Video from "../video/Video";
import './videos.css';

function Videos() {
    const [videos, setVideos] = useState([])
    const {keyword} = useParams();
    return (
        <main>
            <ul className='videos-list'>
                {keyword}
                {/* {
                    videos && videos.map(video => (
                        <li key={video.id} className='video-container'>
                            <Video
                                id={video.id}
                                snippet={video.snippet}
                            />
                        </li>
                    ))
                }*/}
            </ul>
        </main>
    );
}


export default Videos;