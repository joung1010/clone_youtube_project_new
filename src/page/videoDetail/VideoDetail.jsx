import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {useYoutubeApi} from "../../context/YoutubeApiContext";
import Video from "../../components/video/Video";

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
    const {isLoading: relatedLoading, data: related} = useQuery(['related', state.channelId],
        () => {
            return youtube.related(state.channelId);
        },
        {
            staleTime: 1000 * 60 * 5,
        }
    );
    console.log(channel);
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
                    <p>{state.title}</p>
                    <div>
                        <img src={channel.snippet.thumbnails.medium.url} alt={channel.snippet.title}/>
                        <p></p>
                    </div>
                    <p>{state.description}</p>
                </div>
            </div>
            }
            <ul>
            {
                related && related.map(video =>(
                    <Video
                        id={video.id}
                        videos={video}
                    />
                ))

            }
            </ul>
        </div>
    );
}


export default VideoDetail;