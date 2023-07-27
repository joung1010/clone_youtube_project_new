import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {useYoutubeApi} from "../../context/YoutubeApiContext";
import Video from "../../components/video/Video";
import ChannelInfo from "../../components/channelInfo/ChannelInfo";
import RelatedVideo from "../../components/relatedVideo/RelatedVideo";

function VideoDetail(props) {
    const {videoId} = useParams();
    const {state} = useLocation();
    const {youtube} = useYoutubeApi();
    const {channelId, title, description, channelTitle} = state;
    const {isLoading, error, data: related} = useQuery(['related', state.channelId],
        () => {
            return youtube.related(state.channelId);
        },
        {
            staleTime: 1000 * 60 * 5,
        }
    );
    return (
        <section className="flex flex-col lg:flex-row">
            {isLoading && <p>Loading...</p>}
            {error && <p>Someting is Wrong</p>}
            <article className="basis-4/6">
                <iframe
                    className='w-full h-96'
                    src={`https://www.youtube.com/embed/${videoId}`}
                />
                <div>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <ChannelInfo channelId={channelId}
                                 name={channelTitle}
                    />
                    <pre className='whitespace-pre-wrap'>{description}</pre>
                </div>
            </article>
            <section className='basis-2/6'>
                <RelatedVideo id={channelId}/>
            </section>
        </section>
    );
}


export default VideoDetail;