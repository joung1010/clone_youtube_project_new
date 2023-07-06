import React from 'react';
import './video.css'
import {formatAgo} from "../../util/date";

function Video({id, videos: {snippet}}) {
    const {title, thumbnails, channelTitle, publishedAt} = snippet;
    return (
        <li key={id} >
            <img className='video-img' src={thumbnails.medium.url} alt={title}/>
            <div>
                <p className='video-title'>{title}</p>
                <p className='video-channel'>{channelTitle}</p>
                <p className='video-upload'>{formatAgo(publishedAt,'ko')}</p>
            </div>
        </li>
    );
}

{/*<iframe
                className='video-item'
                src={`https://www.youtube.com/embed/${id}`}
            />*/
}

export default Video;