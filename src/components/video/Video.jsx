import React from 'react';

function Video({id,snippet}) {
    return (
        <div>
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
            />
            <h2>{snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>
            <h3>{snippet.publishedAt}</h3>
        </div>
    );
}

export default Video;