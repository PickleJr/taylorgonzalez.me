import React, { Component } from 'react';

import './tools.css';

class Tools extends Component {
    render() {
        return(
            <div className="alt-bg section">
                <h2 id="Tools">
                    <span><i className="fas fa-microchip"></i> Most Used Tools</span>
                </h2>
                <p id="Tools-p">
                    I am familiar with many programming tools. In web servers, I have experience with Apachie,
                    ExpressJS, and Nginx. I have experiences with the C++, Rust, Java, C# and ASP.NET, JavaScript programming
                    languages and more. I have a broad range of skills and am always happy to learn anything new. 
                    With that said, below are some tools I have used on a regular basis.
                </p>
                <ul className="tools">
                    <li className="black">
                        <div><i className="icon-javascript"></i></div>
                        <div>JavaScript</div>
                    </li>
                    <li className="gold">
                        <div><i className="icon-perl"></i></div>
                        <div>Perl</div>
                    </li>
                    <li className="black">
                        <div><i className="icon-php"></i></div>
                        <div>PHP</div>
                    </li>
                    <li className="gold">
                        <div><i className="icon-nodejs"></i></div>
                        <div>NodeJS</div>
                    </li>
                    <li className="black">
                        <div><i className="icon-reactjs"></i></div>
                        <div>ReactJS</div>
                    </li>
                    <li className="gold">
                        <div><i className="icon-java"></i></div>
                        <div>Java</div>
                    </li>
                    <li className="black">
                        <div><i className="icon-git"></i></div>
                        <div>Git</div>
                    </li>
                    <li className="gold">
                        <div><i className="icon-jquery"></i></div>
                        <div>jQuery</div>
                    </li>
                    <li className="black">
                        <div><i className="icon-postgres"></i></div>
                        <div>Postgress</div>
                    </li>
                    <li className="gold">
                        <div><i className="icon-ubuntu"></i></div>
                        <div>Ubuntu</div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Tools;