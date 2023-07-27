import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import ChannelInfo from "../../components/channelInfo/ChannelInfo";
import RelatedVideo from "../../components/relatedVideo/RelatedVideo";

function VideoDetail(props) {
    const {videoId} = useParams();
    const {state} = useLocation();
    const {channelId, title, description, channelTitle} = state;

    return (
        <section className="flex flex-col lg:flex-row">
            <article className="basis-4/6">
                <iframe
                    className='w-full h-96'
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
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