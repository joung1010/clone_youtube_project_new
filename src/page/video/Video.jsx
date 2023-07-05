import React from 'react';
import './video.css'

function Video({id, videos:{snippet}}) {
    return (
        <li key={id} className='video-container'>
            <div className='video'>
                {/*<iframe
                className='video-item'
                src={`https://www.youtube.com/embed/${id}`}
            />*/}
                <img className='video-img' src={snippet.thumbnails.default.url}/>
                <h2 className='video-title'>{snippet.title}</h2>
                <h3 className='video-channel'>{snippet.channelTitle}</h3>
                <h3 className='video-upload'>{snippet.publishedAt}</h3>
            </div>
        </li>
    );
}

export default Video;