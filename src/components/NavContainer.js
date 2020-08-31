import React, { useState, useContext } from 'react';
// my components
import NavLink from './NavLink';

const NavContainer = () => {
    return(
        <div style={styles.navContainerStyle}>
            <NavLink title="Home" link="" />
            <NavLink title="Gallery" link="gallery" />
            <NavLink title="Music" link="music" />
            <NavLink title="Contact" link="contact" />
        </div>
    )
}

export default NavContainer;

const styles = {
    navContainerStyle: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 24,
    }
}