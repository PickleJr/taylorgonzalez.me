import React, { Component } from 'react';

import './header.css';
import selfie from './selfie_square.jpg';

class Nav extends Component {
    render() {
        return(
            <header>
                <img src={selfie} title="Taylor Gonzalez" alt="Me, Taylor Gonzalez"/>
                <div id="links">
                    <ul>
                        <li>
                            <i className="fab fa-github"></i>
                        </li>
                        <li>
                            <i className="fab fa-linkedin"></i>
                        </li>
                        <li>
                            <i className="far fa-file-alt"></i>
                        </li>
                    </ul>
                </div>
                <h1>Taylor Gonzalez</h1>
                <p>Full-Stack Developer</p>
            </header>
        );
    }
}

export default Nav;