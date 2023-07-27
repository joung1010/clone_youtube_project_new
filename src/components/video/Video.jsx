import React from 'react';
import './video.css'
import {formatAgo} from "../../util/date";
import {useNavigate} from "react-router-dom";

function Video({id, videos: {snippet},type}) {
    const {title, thumbnails, channelTitle, publishedAt} = snippet;
    const navigate = useNavigate();
    const isList = type === 'list';
    const handleOnclick = (e) => {
        e.preventDefault();
        navigate(`/videos/watch/${id}`,{state: snippet});
    };
    return (
        <li className={isList ? 'flex gap-1 m-2' : ''}
            key={id}
            onClick={handleOnclick}>
            <img className={isList ? 'w-32 mr-2' : 'video-img'} src={thumbnails.medium.url} alt={title}/>
            <div >
                <p className='video-title'>{title}</p>
                <p className='video-channel'>{channelTitle}</p>
                <p className='video-upload'>{formatAgo(publishedAt,'ko')}</p>
            </div>
        </li>
    );
}

export default Video;