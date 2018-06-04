import React, { Component } from 'react';

class UpArrow extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let hello = document.querySelector("#Hello");
        const bodyRect = document.body.getBoundingClientRect().top;
        const helloRect = hello.getBoundingClientRect().top;
        const helloPosition = helloRect - bodyRect - 50;
        const pageY = event.pageY;

        if(pageY <= helloPosition) {
            let helper = pageY * 32;
            let fontSize = helper / helloPosition
            fontSize = Math.trunc(fontSize);
            fontSize = fontSize + "px";
            document.querySelector("#up-button").style.fontSize = fontSize;
        }
    }

    render() {
        return(
            <div id="up-arrow">
                <button onClick={this.props.onClick} id="up-button">
                    <i id="up-icon" className="fas fa-chevron-circle-up"></i>
                </button>
            </div>
        );
    }
}

export default UpArrow;