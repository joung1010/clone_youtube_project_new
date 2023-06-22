import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './nav.css'

function Nav({ onHandleChange}) {
    const [words, setWords] = useState('');
    const updateVideos = (videos) => {
        onHandleChange(videos);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${words}&key=${process.env.REACT_APP_YOUTUBE_KEY}`, requestOptions)
            .then(response => response.json())
            .then(res => updateVideos(res.items));
    };

    return (
        <nav className='navbar'>
            <div className='nav-logo'>
                <FontAwesomeIcon icon={faYoutube} className='logo-brand' style={{color: "#f40606",}}/>
                <span className='logo-name'>Youtube</span>
            </div>
            <form className='nav-search' onSubmit={onSubmit}>
                <input type="search" placeholder={`Search...`} onChange={(e)=> setWords(e.target.value)} className='search-input'/>
                <button className='search-button'>
                    <FontAwesomeIcon icon={faSearch} className='search-logo'/>
                </button>
            </form>
        </nav>
    );
}

export default Nav;