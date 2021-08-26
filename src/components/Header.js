import React from 'react';
import {Link} from 'react-router-dom'
import HomePage from './HomePage';

function Header() {
    return (
        <div className="header">
            <div className="logo">
            Logo
            </div>
            <div className="nav">
               
                 <Link to="/">Home </Link>
                <Link to="/searchbox">Search </Link>
                 <Link to="">Become a Tutor </Link>
                  <Link to="">SignUp </Link>
                  <Link to="">LogIn </Link>
           
            </div>
        </div>
    );
}

export default Header;