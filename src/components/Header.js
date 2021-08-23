import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="logo">
            Logo
            </div>
            <div className="nav">
                 <Link to="/">Home </Link>
                <Link to="/searchbox">Search </Link>
                 <Link to="/searchbox">Become a Tutor </Link>
                  <Link to="/searchbox">SignUp </Link>
                  <Link to="/searchbox">LogIn </Link>
           
            </div>
        </div>
    );
}

export default Header;