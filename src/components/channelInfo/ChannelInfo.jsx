import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {useYoutubeApi} from "../../context/YoutubeApiContext";

function ChannelInfo({channelId, name }) {
    const {youtube} = useYoutubeApi();
    const {isLoading, error, data: channelImageUrl} = useQuery(
        ['channel',channelId], () => youtube.channelImageUrl(channelId)

        , {
            staleTime: 1000 * 60 * 5,
        }
    );
    return (
        <div className="flex items-center my-4">
            {channelImageUrl &&
            <img src={channelImageUrl} alt={name}
                 className="rounded-full w-12 h-12"
            />
            }
            <p className="mx-1">{name}</p>
        </div>
    );
}

export default ChannelInfo;