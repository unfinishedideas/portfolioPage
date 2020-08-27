import React from 'react';
// my components
import NavContainer from './NavContainer';

const Header = () => {
    return (
        <div className="headerWrapper">
        
            <div className="heroTextBox">
                <h1 className="heroText">Unfinished Ideas</h1>
                {/* <h2 className="subtitleText">no idea is ever finished, only abandoned</h2> */}
            </div>
           
            <NavContainer/>

        </div>
    )
}

export default Header;

