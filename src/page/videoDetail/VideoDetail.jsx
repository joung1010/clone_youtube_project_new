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
    return (
        <div className="flex">
            {isLoading && <p>Loading...</p>}
            {error && <p>Someting is Wrong</p>}
            {channel &&
            <div className="flex-auto w-64 mr-2">
                <iframe
                    className='w-full h-96'
                    src={`https://www.youtube.com/embed/${videoId}`}
                />
                <p className="my-5">{state.title}</p>
                <div className="flex my-4">
                    <img src={channel.snippet.thumbnails.medium.url} alt={channel.snippet.title}/>
                    <p className="mx-1">{channel.snippet.title}</p>
                </div>
                <p>{state.description}</p>
            </div>
            }
            <ul className="flex-auto w-24">
                {
                    related && related.map(video => (
                        <Video
                            id={video.id}
                            videos={video}
                            isSide={true}
                        />
                    ))

                }
            </ul>
        </div>
    );
}


export default VideoDetail;