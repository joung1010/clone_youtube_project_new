import React, {useEffect} from 'react';
import {logDOM} from "@testing-library/react";
function Videos(props) {
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&hl=ko&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_KEY}`, requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
    },[])
    return (
        <ul className='videos-list'>
            <li className='video'>hi</li>
        </ul>
    );
}



export default Videos;