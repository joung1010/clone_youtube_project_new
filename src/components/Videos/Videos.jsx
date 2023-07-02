import React, {useEffect, useState} from 'react';
import Video from "../video/Video";
import './videos.css';

function Videos({onHandleChange,videos, youtubeAPI}) {
    useEffect(() => {
        youtubeAPI.getPopularVideoList()
            .then(res => onHandleChange(res));
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