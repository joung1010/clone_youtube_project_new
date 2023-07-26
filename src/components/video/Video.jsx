import React from 'react';
import './video.css'
import {formatAgo} from "../../util/date";
import {useNavigate} from "react-router-dom";

function Video({id, videos: {snippet}},isSide) {
    const {title, thumbnails, channelTitle, publishedAt} = snippet;
    const navigate = useNavigate();

    const handleOnclick = (e) => {
        e.preventDefault();
        navigate(`/videos/watch/${id}`,{state: snippet});
    };
    return (
        <li className={isSide && `video-side`}
            key={id}
            onClick={handleOnclick}>
            <img className={isSide && `video-img__side` || `video-img`} src={thumbnails.medium.url} alt={title}/>
            <div>
                <p className='video-title'>{title}</p>
                <p className='video-channel'>{channelTitle}</p>
                <p className='video-upload'>{formatAgo(publishedAt,'ko')}</p>
            </div>
        </li>
    );
}

export default Video;