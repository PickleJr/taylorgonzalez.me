import React, { Component } from 'react';

import './portfolio.css';

import notereader from './note-reader-web.png';
import fhsucalendar from './fhsu-calendar-web.png';
import wheelof8ball from './wheel-of-8-ball-web.png';

class Portfolio extends Component {
    render() {
        return(
            <div className="section">
                <h2 id="Portfolio">
                    <span><i className="far fa-file-alt"></i> Portfolio</span>
                </h2>
                <div id="portfolio-projects">
                    <div className="project">
                        <a className="project-image" href="http://notereader.taylorgonzalez.me/">
                            <img src={notereader} title="Note Reader Screenshot" alt="Note Reader Screenshot"/>
                        </a>
                        <div className="project-content">
                            <h3>Note Reader</h3>
                            <p>
                                Note Reader is a simple application that takes text input and converts it to
                                an MP3 file using IBM watson API. This was a school project, so due to limitations
                                I did not develop a backend for it. However I created the ability to save notes and upload
                                them later.
                            </p>
                            <ul className="project-links">
                                <li>
                                    <a href="https://github.com/PickleJr/notereader">
                                        <i className="fab fa-github-alt"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://notereader.taylorgonzalez.me/">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="project">
                        <a className="project-image" href="http://fhsucalendar.taylorgonzalez.me/">
                            <img src={fhsucalendar} title="FHSU Calendar Screenshot" alt="FHSU Calendar Screenshot"/>
                        </a>
                        <div className="project-content">
                            <h3>FHSU Calendar</h3>
                            <p>
                                My remake of <a href="http://calendar.fhsu.edu" title="Fort Hays State University Calendar">FHSU's calendar.</a>
                                It was a good excuse to learn RSS streams and had interesting problems such as generating
                                dynamic calender months, and sorting and storing events for each date. It was also a good
                                project for honing in on my ReactJS skills as well as learning webpack.
                            </p>
                            <ul className="project-links">
                                <li>
                                    <a href="https://github.com/PickleJr/fhsucalendar">
                                        <i className="fab fa-github-alt"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://fhsucalendar.taylorgonzalez.me/">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="project">
                        <a className="project-image" href="http://wheelof8ball.taylorgonzalez.me/">
                            <img src={wheelof8ball} title="Wheel of 8 Ball Screenshot" alt="Wheel of 8 Ball Screenshot"/>
                        </a>
                        <div className="project-content">
                            <h3>Wheel of 8 Ball</h3>
                            <p>
                                Another school project, this webapp is simply a Wheel of Fortune themed Magic 8 Ball.
                                Ask it a yes or no questoin and it will give you an answer. The school project itself was to simply
                                make a Web App that reacts to browser events. However I always like to push my self and learn new things.
                                I went ahead and dabbled in VueJS and leaned PugJS for this project.
                            </p>
                            <ul className="project-links">
                                <li>
                                    <a href="https://github.com/PickleJr/wheelOfMagic8Fortune">
                                        <i className="fab fa-github-alt"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://wheelof8ball.taylorgonzalez.me/">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;