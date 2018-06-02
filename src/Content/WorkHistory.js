import React, { Component } from 'react';

import "./workhistory.css";

class WorkHistory extends Component {
    render() {
        return(
            <div className="seciton">
                <h2><span><i className="far fa-building"></i> Work History</span></h2>
                <div className="timeline">
                    <div className="container">
                        <div className="job">
                            <h3 className="job-title">Software Engineer</h3>
                            <div className="job-date">May - August 2017, May - August 2018</div>
                            <p>Ground Stations Engineering, Bombardier Flight Test Center, Wichita, KS</p>
                            <ul>
                                <li>
                                    Updated and created new web applications
                                    <ul>
                                        <li>Made older applications significantly faster and maintainable</li>
                                        <li>Updated GUI on applications to speed up work flow</li>
                                        <li>Made new applications to accomplish tasks accross multiple shifts</li>
                                    </ul>
                                </li>
                                <li>Started development on a front end tool to test web applications</li>
                                <li>Normalized Databases</li>
                                <li>Wrote scripts to find errors in CSV files</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="job">
                            <h3 className="job-title">Student Web Specialist</h3>
                            <div className="job-date">August 2015 - Present</div>
                            <p>University Relations &amp; marketing, Fort Hays State University, Hays, KS</p>
                            <ul>
                                <li>Updated and maintained FHSU website while focusing on usability and quality assurance</li>
                                <li>Assist departments when more difficult changes are needed on the website</li>
                                <li>Assited in developing the FHSU virtual tour and built money saving applications</li>
                                <li>Provite analytics to provide better user experience</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkHistory;