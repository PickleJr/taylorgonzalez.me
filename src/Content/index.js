import React, { Component } from 'react';

import './content.css';

import WorkHistory from './WorkHistory';
import Portfolio from './Portfolio';
import Tools from './Tools';
import Contact from './Contact';

class Content extends Component {
    render() {
        return(
            <div id="content">
                <div id="first-section" className="section">
                    <h2 className="right" id="Hello"><span><i className="far fa-smile"></i> Hello, World!</span></h2>
                    <p id="Hello-p">
                        Hello! I'm <span id="name">Taylor Gonzalez</span> and I am a
                        Full Stack Developer and a Software engineer. I enjoy everything coding, from
                        working on systems applications using Rust or C++, to developing reactive web applications
                        using ReactJS or VueJS.
                    </p>
                </div>
                <WorkHistory/>
                <Portfolio/>
                <Tools/>
                <Contact/>
            </div>
        );
    }
}

export default Content;