import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import './nav.css'

function Nav(props) {
    return (
        <nav className='navbar'>
            <FontAwesomeIcon icon={faYoutube} style={{color: "#f40606",}} />
            hello
        </nav>
    );
}

export default Nav;