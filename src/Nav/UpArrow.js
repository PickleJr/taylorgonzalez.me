import React, { Component } from 'react';

class UpArrow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                fontSize: 0
            }
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

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
        const pageY = window.pageYOffset;

        if(pageY <= helloPosition) {
            let helper = pageY * 32;
            let fontSize = helper / helloPosition
            fontSize = Math.trunc(fontSize);
            fontSize = fontSize + "px";
            this.setState({
                style: {
                    fontSize: fontSize
                }
            });
        } else if(pageY > helloPosition) {
            this.setState({
                style: {
                    fontSize: "32px"
                }
            });
        }
    }

    render() {
        return(
            <div id="up-arrow">
                <button onClick={this.props.onClick} style={this.state.style} id="up-button">
                    <i id="up-icon" className="fas fa-chevron-circle-up"></i>
                </button>
            </div>
        );
    }
}

export default UpArrow;