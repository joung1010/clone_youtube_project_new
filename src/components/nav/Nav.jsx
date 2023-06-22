import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './nav.css'

function Nav({ onHandleChange}) {
    const [words, setWords] = useState('');
    const updateVideos = (words) => {
        onHandleChange(words);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        updateVideos(words);
        e.target.reset();
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