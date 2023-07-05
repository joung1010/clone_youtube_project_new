import React, {useEffect, useState} from 'react';
import {useParams, useOutletContext} from 'react-router-dom';
import Video from "../video/Video";
import './videos.css';
import {useQuery} from "@tanstack/react-query";
import {search} from "../../service/api/youtube";
import TestYoutube from "../../service/api/testYoutube";


function Videos() {
    // const [videos, setVideos] = useState([])
    const {keyword} = useParams()
    const {youtubeAPI} = useOutletContext();
    const {isLoading, error, data: videos} = useQuery(
        ['videos', keyword], () => {
            const youtube = new TestYoutube();
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