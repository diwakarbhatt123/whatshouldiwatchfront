/**
 * Created by diwakar on 31/07/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="topnav" id="myTopnav">
                <Link to="/" className="title">MovieDB</Link>
                <Link to="/about" className="options">About</Link>
                <Link to="/home" className="options">Home</Link>
            </div>
        );
    }
}

export default Header;