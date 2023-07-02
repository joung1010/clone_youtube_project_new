import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation} from 'react-router-dom';
import './nav.css'

function Nav() {
    const [words, setWords] = useState('');
    const navigate = useNavigate();
    const location = useLocation().pathname;

    useEffect(() => {
       location && setWords(location.split('/')[2])
    }, []);


    const onHandleChange = (e) => {
        setWords(e.target.value);
    };

    const onHandleClick = (e) => {
        setWords('');
        navigate(`/`);

    };

    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${words}`)
        // e.target.reset();
    };

    return (
        <nav className='navbar'>
            <div className='nav-logo' onClick={(e) => onHandleClick(e)}>
                <FontAwesomeIcon icon={faYoutube} className='logo-brand' style={{color: "#f40606",}}/>
                <span className='logo-name'>Youtube</span>
            </div>
            <form className='nav-search' onSubmit={onSubmit}>
                <input type="search" placeholder={`Search...`}
                       onChange={(e)=> onHandleChange(e)}
                        value={words}
                       className='search-input'
                />
                <button className='search-button'>
                    <FontAwesomeIcon icon={faSearch} className='search-logo'/>
                </button>
            </form>
        </nav>
    );
}

export default Nav;