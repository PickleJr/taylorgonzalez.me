import React, { Component } from 'react';

import "./workhistory.css";

class WorkHistory extends Component {
    render() {
        return(
            <div className="alt-bg section">
                <h2 id="Work-History">
                    <span><i className="far fa-building"></i> Work History</span>
                </h2>
                <div className="timeline">
                    <div className="container">
                        <div className="job">
                            <h3 className="job-title">Software Engineer</h3>
                            <div className="job-date">January 2019 - Present</div>
                            <p>Charge Services, Cerner, Kansas City, Missouri</p>
                            <ul>
                                <li>
                                    Developed a SPA tool to perform CRUD operations on a SQL databDeveloped a SPA
                                    tool to perform CRUD operations on a SQL database using Spring-Boot and React.js 
                                    <ul>
                                        <li>Focused on speed and usability during the development process.</li>
                                        <li>Guided and mentored teammates on React.js and single page application practices.</li>
                                    </ul>
                                </li>
                                <li>Updated Scripts to reduce error logs on client servers.</li>
                                <li>Provided patches for C# Enterprise Applications which ensured a better user experience.</li>
                                <li>Performed Regression Tests on applications to ensure code quality and reliability.</li>
                                <li>Began development on a Visual Studio Code plugin for a proprietary programming language.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="job">
                            <h3 className="job-title">Software Engineer Intern</h3>
                            <div className="job-date">May - August 2017, May - August 2018</div>
                            <p>Ground Stations Engineering, Bombardier Flight Test Center, Wichita, KS</p>
                            <ul>
                                <li>
                                    Updated and created intranet web applications using Perl and JavaScript.
                                    <ul>
                                        <li>Made older applications significantly faster and maintainable.</li>
                                        <li>Updated GUI on applications to speed up work flow and made apps user friendly.</li>
                                        <li>Made a new application that made it easier to accomplish tasks across multiple shifts.</li>
                                    </ul>
                                </li>
                                <li>Started development on a tool to test web applications using CasperJS.</li>
                                <li>Normalized Databases.</li>
                                <li>Built an intranet web scraper using Node.js.</li>
                                <li>Wrote scripts to find errors in CSV files.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="job">
                            <h3 className="job-title">Student Web Specialist</h3>
                            <div className="job-date">August 2015 - December 2018</div>
                            <p>University Relations &amp; marketing, Fort Hays State University, Hays, KS</p>
                            <ul>
                                <li>Updated and maintained the FHSU website using C#, ASP.NET, Apache Velocity, and PHP while focusing on usability and quality assurance.</li>
                                <li>Assisted Departments with CMS issues while updating the FHSU site.</li>
                                <li>Redesigned multiple departments’ webpage across the FHSU site to provide a better user experience.</li>
                                <li>Took part in developing the FHSU virtual tour using JavaScript, C#, and MySQL.</li>
                                <li>Built scripts to push site wide updates and scrape the FHSU site for faults using Java and Python.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkHistory;