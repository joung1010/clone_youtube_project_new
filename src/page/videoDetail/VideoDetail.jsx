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
    const {channelId,title,description,channelTitle} = state;
    const {isLoading, error, data: related} = useQuery(['related', state.channelId],
        () => {
            return youtube.related(state.channelId);
        },
        {
            staleTime: 1000 * 60 * 5,
        }
    );
    return (
        <section className="flex">
            {isLoading && <p>Loading...</p>}
            {error && <p>Someting is Wrong</p>}
            <article className="flex-auto w-64 mr-2">
                <iframe
                    className='w-full h-96'
                    src={`https://www.youtube.com/embed/${videoId}`}
                />
                <div>
                    <p>{title}</p>
                    <ChannelInfo channelId={channelId}
                                 name={channelTitle}
                    />
                    <pre>{description}</pre>
                </div>
            </article>
                <RelatedVideo id={videoId}/>
{/*            <ul className="flex-auto w-24">
                {
                    related && related.map(video => (
                        <Video
                            id={video.id}
                            videos={video}
                            isSide={true}
                        />
                    ))

                }
            </ul>*/}
        </section>
    );
}


export default VideoDetail;