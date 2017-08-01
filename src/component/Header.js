/**
 * Created by diwakar on 31/07/17.
 */
import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="topnav" id="myTopnav">
                <a href="/" className="title">MovieDB</a>
                <a href="#contact" className="options">About</a>
                <a href="#news" className="options">Home</a>
            </div>
        );
    }
}

export default Header;