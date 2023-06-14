import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './nav.css'

function Nav(props) {
    return (
        <nav className='navbar'>
            <div className='nav-logo'>
                <FontAwesomeIcon icon={faYoutube} className='logo-brand' style={{color: "#f40606",}}/>
                <span className='logo-name'>Youtube</span>
            </div>
            <div className='nav-search'>
                <input type="search" placeholder={`Search...`} className='search-input'/>
                <button className='search-button'>
                    <FontAwesomeIcon icon={faSearch} className='search-logo'/>
                </button>
            </div>
        </nav>
    );
}

export default Nav;