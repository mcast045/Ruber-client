import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RSymbol from './../images/RSymbol.png';
import { Link } from 'react-router-dom';

const Header = () => {

    const showUsers = useSelector(state => state.showUsers);

    return (
        <header id='header-content'>
            <div id='header-title-content'>
                <img id='header-img' src={RSymbol} alt='RSymbol' />
                <h1 id='title-text'>U b e r</h1>
            </div>

            <nav id='nav-content'>
                <Link className={showUsers ?
                    'btn btn-primary btn-sm nav-btn' : 'btn btn-secondary btn-sm nav-btn'
                } to='/rides'>Ride History</Link>
                <Link className={showUsers ?
                    'btn btn-secondary btn-sm nav-btn' : 'btn btn-primary btn-sm nav-btn'
                } to='/users'>Users</Link>
            </nav>

        </header>
    )
}



export default Header;