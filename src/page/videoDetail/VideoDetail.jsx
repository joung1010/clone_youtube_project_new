import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {useYoutubeApi} from "../../context/YoutubeApiContext";

function VideoDetail(props) {
    const {videoId} = useParams();
    const {state} = useLocation();
    const {youtube} = useYoutubeApi();
    console.log(state);
    const {isLoading, error, data: channel} = useQuery(
        [state.channelId], () => {
            return youtube.channel(state.channelId);
        }
        , {
            staleTime: 1000 * 60 * 5,
        }
    );
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Someting is Wrong</p>}
            {channel &&
            <div>
                <div>
                    <iframe
                        className='video-item'
                        src={`https://www.youtube.com/embed/${videoId}`}
                    />
                    <p>{state.channelTitle}</p>

                    <p>{state.description}</p>
                </div>
                <div>
                    List
                </div>
            </div>
            }
        </div>
    );
}


export default VideoDetail;