import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {useYoutubeApi} from "../../context/YoutubeApiContext";
import Video from "../video/Video";

function RelatedVideo({id}) {
    const {youtube} = useYoutubeApi();
    const {isLoading, error, data: videos} = useQuery(
        ['related',id], () => youtube.related(id)
        , {
            staleTime: 1000 * 60 * 5,
        }
    );

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Someting is Wrong</p>}
            {videos &&
            <ul className=''>
                {
                    videos && videos.map(video => (
                        <Video
                            id={video.id}
                            videos={video}
                            type='list'
                        />
                    ))
                }
            </ul>
            }
        </div>
    );
}

export default RelatedVideo;