import React, { Component } from 'react';

import './portfolio.css';

import notereader from './note-reader-web.png';
import fhsucalendar from './fhsu-calendar-web.png';
import scanAndGo from './scan-and-go.png';
import wheelof8ball from './wheel-of-8-ball-web.png';

class Portfolio extends Component {
    render() {
        return(
            <div id="portfolio" className="section">
                <h2 className="right" id="Portfolio">
                    <span><i className="far fa-file-alt"></i> Portfolio</span>
                </h2>
                <div id="portfolio-projects">
                    <div className="project">
                        <a className="project-image" href="https://scan-and-go.herokuapp.com/">
                            <img src={scanAndGo} title="San and Go Screenshot" alt="San and Go Screenshot"/>
                        </a>
                        <div className="project-content">
                            <h3>Scan and Go</h3>
                            <p>
                                Scan and Go is an experimental app that was thought up to a be a way to improve the grocery
                                shopping experience. It is a Progressive Web App, meaning even though it is on the web, users can
                                'download' the app to their phone and use it offline. It saves lists to your device and utilizes
                                your devices camera. It potentially can scan barcodes, but due to the limitations of the library I
                                used, it is not 100% effective. 
                            </p>
                            <ul className="project-links">
                                <li>
                                    <a href="https://github.com/PickleJr/scan-and-go">
                                        <i className="fab fa-github-alt"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://scan-and-go.herokuapp.com/">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="project">
                        <a className="project-image" href="http://notereader.taylorgonzalez.me/">
                            <img src={notereader} title="Note Reader Screenshot" alt="Note Reader Screenshot"/>
                        </a>
                        <div className="project-content">
                            <h3>Note Reader</h3>
                            <p>
                                Note Reader is a simple application that takes text input and converts it to
                                an MP3 file using IBM Watson API. This was a school project, so due to limitations
                                I did not develop a backend for it. However, I created the ability to save notes and upload
                                them later. I have considered plans to make this into a Progressive Web App in the future!
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
                                I wanted to learn how to read RSS streams and get more experience with ReactJS. 
                                I had faced interesting problems such as generating
                                dynamic calendar views, and looking up events on any given date without causing a long runtime. It was also a good
                                project for further growing my knowledge with webpack and refreshing my skills with git.
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
                                Another school project, this web app is simply a Wheel of Fortune themed Magic 8 Ball.
                                Ask it a yes or no question and it will give you an answer. The school project itself was to simply
                                make a Web App that reacts to browser events. However, I always like to push myself and learn new things.
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