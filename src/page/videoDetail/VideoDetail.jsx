import React from 'react';
import {useLocation, useParams} from "react-router-dom";

function VideoDetail(props) {
    const {videoId} = useParams();
    const {state} = useLocation();
    console.log(state);
    return (
        <div>
            <div>
                <iframe
                    className='video-item'
                    src={`https://www.youtube.com/embed/${videoId}`}
                />
            </div>
            <div>
                List
            </div>
        </div>
    );
}

export default VideoDetail;