import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {useYoutubeApi} from "../../context/YoutubeApiContext";

function ChannelInfo({channelId, name, description}) {
    const {youtube} = useYoutubeApi();
    const {isLoading, error, data: channel} = useQuery(
        [channelId], () => {
            return youtube.channel(channelId);
        }
        , {
            staleTime: 1000 * 60 * 5,
        }
    );
    return (
        <div className="flex items-center my-4">
            <img src={channel.snippet.thumbnails.medium.url} alt={channel.snippet.title}
                 className="rounded-full w-12 h-12"
            />
            <p className="mx-1">{name}</p>
        </div>
    );
}

export default ChannelInfo;