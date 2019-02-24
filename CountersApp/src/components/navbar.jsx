import React, { Component } from 'react';

const NavBar = ({counters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Active counters <span className="badge badge-pill badge-secondary">{counters}</span>
            </a>
        </nav>
    );
}
 
export default NavBar;