import React from 'react';
// my components
import NavLink from './NavLink';

const Header = () => {
    return (
        <div className="headerWrapper">
        
            <div className="heroTextBox">
                <h1 className="heroText">Unfinished Ideas</h1>
                {/* <h2 className="subtitleText">no idea is ever finished, only abandoned</h2> */}
            </div>
           
            <div className="topNav">
                <NavLink title="Home"/>
                <NavLink title="Gallery"/>
                <NavLink title="Music"/>
                <NavLink title="Contact"/>
                {/* <a href="www.google.com" className="topNavLink">Home</a>
                <a href="www.google.com" className="topNavLink">Gallery</a>
                <a href="www.google.com" className="topNavLink">Music</a>
                <a href="www.google.com" className="topNavLink">Contact</a> */}
            </div>

        </div>
    )
}

export default Header;

