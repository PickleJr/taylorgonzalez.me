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
                            <a  className="social-link" title="My Github" href="https://github.com/PickleJr">
                                <i className="fab fa-github-square"></i>
                            </a>
                        </li>
                        <li>
                            <a className="social-link" title="My Linkedin" href="https://www.linkedin.com/in/taylor-picklejr-gonzalez/">
                                <i className="fab fa-linkedin"></i>
                            </a>
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