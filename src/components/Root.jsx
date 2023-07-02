import React, {useEffect, useState} from 'react';
import Nav from "./nav/Nav";
import Videos from "./Videos/Videos";
import {YoutubeUtil} from "../service/youtubeUtil";
import {QueryClient, QueryClientProvider, useQuery,} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const youtubeAPI = new YoutubeUtil();
const queryClient = new QueryClient()


function Root(props) {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        youtubeAPI.getPopularVideoList()
            .then(res => onHandleChange(res));
    }, []);

    const onHandleChange = (videos) => {
        setVideos(videos);
    };

    return (
        <QueryClientProvider client={queryClient}>
            <Nav
                onHandleChange={onHandleChange}
                youtubeAPI={youtubeAPI}
            />
            <Videos videos={videos}
                    onHandleChange={onHandleChange}
                    youtubeAPI={youtubeAPI}
            />
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    );
}

export default Root;