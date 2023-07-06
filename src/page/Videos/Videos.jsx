import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Video from "../../components/video/Video";
import './videos.css';
import {useQuery} from "@tanstack/react-query";
import {useYoutubeApi} from "../../context/YoutubeApiContext";


function Videos() {
    // const {youtube} = useOutletContext();
    const {youtube} = useYoutubeApi();
    const {keyword} = useParams()
    const {isLoading, error, data: videos} = useQuery(
        ['videos', keyword], () => {
            return youtube.search(keyword);
        }
        , {
            staleTime: 1000 * 60 * 5,
        }
    );

    return (
        <main>
            {isLoading && <p>Loading...</p>}
            {error && <p>Someting is Wrong</p>}
            {videos &&
            <ul className='videos-list'>
                {
                    videos && videos.map(video => (
                        <Video
                            id={video.id}
                            videos={video}
                        />
                    ))
                }
            </ul>
            }
        </main>
    );
}


export default Videos;