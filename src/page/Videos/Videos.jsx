import React, {useEffect, useState} from 'react';
import {useParams, useOutletContext} from 'react-router-dom';
import Video from "../video/Video";
import './videos.css';
import {useQuery} from "@tanstack/react-query";
import axios from "axios";


function Videos() {
    // const [videos, setVideos] = useState([])
    const {keyword} = useParams()
    const {youtubeAPI} = useOutletContext();
    const {isLoading, error, data: videos} = useQuery(
        ['videos', keyword],
        async () => {
            return axios
                .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
                .then((res) => res.data.items);
        }, {
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