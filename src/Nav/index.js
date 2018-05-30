import React, { Component } from 'react';

import './nav.css';

class Nav extends Component {
    render() {
        return(
            <nav>
                <a href="#" className="nav-link">
                    Portfolio
                </a>
                <button id="up-arrow">
                    <i className="fas fa-chevron-circle-up"></i>
                </button>
                <a href="#" className="nav-link">
                    Contact
                </a>
            </nav>
        );
    }
}

export default Nav;