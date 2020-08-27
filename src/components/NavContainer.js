import React, { useState, useContext } from 'react';
// my components
import NavLink from './NavLink';

const NavContainer = () => {
    return(
        <div style={styles.navContainerStyle}>
            <NavLink title="Home" />
            <NavLink title="Gallery" />
            <NavLink title="Music" />
            <NavLink title="Contact" />
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