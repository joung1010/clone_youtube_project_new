import React from 'react';
import './video.css'
import {formatAgo} from "../../util/date";
import {useNavigate} from "react-router-dom";

function Video({id, videos: {snippet}}) {
    const {title, thumbnails, channelTitle, publishedAt} = snippet;
    const navigate = useNavigate();

    const handleOnclick = (e) => {
        e.preventDefault();
        navigate(`/videos/watch/${id}`,{state: snippet});
    };
    return (
        <li key={id}  onClick={handleOnclick}>
            <img className='video-img' src={thumbnails.medium.url} alt={title}/>
            <div>
                <p className='video-title'>{title}</p>
                <p className='video-channel'>{channelTitle}</p>
                <p className='video-upload'>{formatAgo(publishedAt,'ko')}</p>
            </div>
        </li>
    );
}

export default Video;