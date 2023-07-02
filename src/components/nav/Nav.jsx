import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {BsYoutube,BsSearch} from 'react-icons/bs'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {useNavigate, Link, useParams} from 'react-router-dom';
import './nav.css'

function Nav() {
    const [words, setWords] = useState('');
    const navigate = useNavigate();
    const {keyword} = useParams();

    useEffect(() => {
        setWords(keyword || '');
    }, [keyword]);


    const onHandleChange = (e) => {
        setWords(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${words}`)
        // e.target.reset();
    };

    return (
        <nav className='navbar'>
            <Link to='/'
                className='nav-logo'>
                <BsYoutube className='logo-brand'/>
                <span className='logo-name'>Youtube</span>
            </Link>
            <form className='nav-search' onSubmit={onSubmit}>
                <input type="search" placeholder={`Search...`}
                       onChange={(e) => onHandleChange(e)}
                       value={words}
                       className='search-input'
                />
                <button className='search-button'>
                    {/*<FontAwesomeIcon icon={faSearch} className='search-logo'/>*/}
                    <BsSearch className='search-logo'/>
                </button>
            </form>
        </nav>
    );
}

export default Nav;