import React, { Component } from 'react';

class Technologies extends Component {
    render() {
        return(
            <div className="section">
                <h2><span><i className="fas fa-microchip"></i> Most Used Technologies</span></h2>
                <p>
                    I am familiar with many programming technologies. In web servers, I have experience with Apachie
                    ExpressJS, and Nginx. I have experiences with the C++, Rust, Java, C# and ASP.NET, Javascript programming
                    languages and more. I have a broad range of skils and am always happy to learn anything new. 
                    With that said, below are some technologies I have used on a regular basis.
                </p>
                <ul className="technologies">
                    <li>
                        <div><i className="icon-javascript"></i></div>
                        <div>Javascript</div>
                    </li>
                    <li>
                        <div><i className="icon-perl"></i></div>
                        <div>Perl</div>
                    </li>
                    <li>
                        <div><i className="icon-php"></i></div>
                        <div>PHP</div>
                    </li>
                    <li>
                        <div><i className="icon-nodejs"></i></div>
                        <div>NodeJS</div>
                    </li>
                    <li>
                        <div><i className="icon-reactjs"></i></div>
                        <div>ReactJS</div>
                    </li>
                    <li>
                        <div><i className="icon-java"></i></div>
                        <div>Java</div>
                    </li>
                    <li>
                        <div><i className="icon-git"></i></div>
                        <div>Git</div>
                    </li>
                    <li>
                        <div><i className="icon-jquery"></i></div>
                        <div>Jquery</div>
                    </li>
                    <li>
                        <div><i className="icon-postgres"></i></div>
                        <div>Postgres</div>
                    </li>
                    <li>
                        <div><i className="icon-ubuntu"></i></div>
                        <div>Ubuntu</div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Technologies;