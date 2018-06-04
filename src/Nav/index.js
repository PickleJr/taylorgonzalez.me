import React, { Component } from 'react';

import UpArrow from './UpArrow';

import './nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.handleScrollTo = this.handleScrollTo.bind(this);
    }

    handleScrollTo(event) {
        event.preventDefault();
        let offsetPosition;

        if(event.target.localName === "a") {

            let hrefRegex = /\/(#.+)$/g;
            let href = event.target.href;
            href = hrefRegex.exec(href)[1];
            let section = document.querySelector(href);

            const bodyRect = document.body.getBoundingClientRect().top;
            const secitonRect = section.getBoundingClientRect().top;
            const sectionPosition = secitonRect - bodyRect;
            offsetPosition = sectionPosition - 50;

        } else if(event.target.localName === "button") {
            offsetPosition = 0;
        }

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        window.dispatchEvent(new Event('scroll'));
    }

    render() {
        return(
            <nav>
                <a onClick={this.handleScrollTo} href="#Work-History" className="nav-link">
                    History
                </a>
                <a onClick={this.handleScrollTo} href="#Portfolio" id="middle-nav-left" className="nav-link">
                    Portfolio
                </a>
                <UpArrow onClick={this.handleScrollTo}/>
                <a onClick={this.handleScrollTo} href="#Tools" id="middle-nav-right" className="nav-link">
                    Tools
                </a>
                <a onClick={this.handleScrollTo} href="#Contact" className="nav-link">
                    Contact
                </a>
            </nav>
        );
    }
}

export default Nav;