import React, { Component } from 'react';

import UpArrow from './UpArrow';

import './nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: '',
        }
        this.handleScrollTo = this.handleScrollTo.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        const pageY = event.pageY;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elements = [
            document.querySelector('#Work-History'),
            document.querySelector('#Portfolio'),
            document.querySelector('#Tools'),
            document.querySelector('#Contact'),
        ];
        const sectionRects = [
            elements[0].getBoundingClientRect().top,
            elements[1].getBoundingClientRect().top,
            elements[2].getBoundingClientRect().top,
            elements[3].getBoundingClientRect().top,
        ];
        const sectionPositions = [
            sectionRects[0] - bodyRect - 50,
            sectionRects[1] - bodyRect - 50,
            sectionRects[2] - bodyRect - 50,
            sectionRects[3] - bodyRect - 50,
        ];

        let anyActive = false;
        for(var i = sectionPositions.length - 1; i >= 0; i--) {
            if(pageY >= sectionPositions[i]) {
                this.setState({
                    active: elements[i].getAttribute('id'),
                });
                anyActive = true;
                break;
            }
        }
        if(!anyActive && this.state.active !== '') {
            this.setState({
                active: '',
            });
        }
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
        const classes = {
            history: 'nav-link' + ((this.state.active === 'Work-History') ? ' active' : ''),
            portfolio: 'nav-link' + ((this.state.active === 'Portfolio') ? ' active' : ''),
            tools: 'nav-link' + ((this.state.active === 'Tools') ? ' active' : ''),
            contact: 'nav-link' + ((this.state.active === 'Contact') ? ' active' : ''),
        }
        return(
            <nav>
                <a onClick={this.handleScrollTo} href="#Work-History" className={classes.history}>
                    History
                </a>
                <a onClick={this.handleScrollTo} href="#Portfolio" id="middle-nav-left" className={classes.portfolio}>
                    Portfolio
                </a>
                <UpArrow onClick={this.handleScrollTo}/>
                <a onClick={this.handleScrollTo} href="#Tools" id="middle-nav-right" className={classes.tools}>
                    Tools
                </a>
                <a onClick={this.handleScrollTo} href="#Contact" className={classes.contact}>
                    Contact
                </a>
            </nav>
        );
    }
}

export default Nav;