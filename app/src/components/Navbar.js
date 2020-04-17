import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink exact to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/projects">PROJECTS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>           
        </div>
    )
}

export default Navbar;