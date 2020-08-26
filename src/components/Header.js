import React from 'react';

const Header = () => {
    return (
        <div className="headerWrapper">
            
            <div className="heroTextBox">
                <h1 className="heroText">Unfinished Ideas</h1>
                <h2 className="subtitleText">no idea is ever finished, only abandoned</h2>
            </div>
           
            <div className="topNav">
                <a href="www.google.com" className="topNavLink">Home</a>
                <a href="www.google.com" className="topNavLink">Gallery</a>
                <a href="www.google.com" className="topNavLink">Interests</a>
                <a href="www.google.com" className="topNavLink">Music</a>
            </div>

        </div>
    )
}

export default Header;

