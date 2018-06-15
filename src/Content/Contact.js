import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postback: false,
            formInfo: '',
            formerr: '',
            form: {
                name: '',
                email: '',
                message: '',
            },
            formDementions: {
                height: "auto",
                width: "auto",
            },
            formHeight: {
                height: "auto",
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    componentDidMount() {
        let state = this.state;
        let form = document.querySelector("form");
        let elemHeight = form.clientHeight + "px";
        let elemWidth = this.getElementWidth(form) + "px";
        state.formHeight = {
            height: elemHeight,
        };
        state.formDementions = {
            height: elemHeight,
            width: elemWidth,
        };
        this.setState(state);
    }

    getElementWidth(element) {
        let styles = window.getComputedStyle(element);
        let padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
        return element.clientWidth - padding;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let state = this.state;
        state.form[name] = value;

        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = new FormData(event.target);

        let newState = this.state;
        newState.form = {
            name: '',
            email: '',
            message: '',
        };
        newState.postback = true;
        newState.formInfo = 'Sending...';
        this.setState(newState);

        fetch("/sendmail.php", {
            method: 'post',
            headers: (new Headers()).append('Content-Type', 'application/x-www-form-urlencoded'),
            body: data,
        }).then(res => {
            return res.json();
        }).catch(err => {
            let state = this.state;
            console.log(err);
            if(state.postback) {
                state.formInfo = 'error';
                this.setState(state);
            }
        }).then(res => {
            let state = this.state;
            if(res.error) {
                if(state.postback) {
                    state.formInfo = 'error';
                    state.formerr = res.msg;
                    this.setState(state);
                }
            } else {
                state.formInfo = "Email went through! I'll look at your message soon.";
                this.setState(state);
            }
        });
    }

    resetForm(event) {
        let state = this.state;
        state.postback = false;
        state.formInfo = '';
        state.formerr = '';
        this.setState(state);
    }

    render() {
        let message = this.state.formInfo;
        if(message === 'error') {
            message = (
                <span id="error">
                    There was an error, please try again or contact me through other means
                    <br/>
                    {this.state.formerr}
                </span>
            );
        }
        let display = (this.state.postback) ? (
            <div key={2} style={this.state.formDementions} id="postback">
                <p>{message}</p>
                <button onClick={this.resetForm}>Reset</button>
            </div>
        ) : (
            <form style={this.state.formDementions} key={1} onSubmit={this.handleSubmit}>
                <label>
                    <span>Name:</span>
                    <input type="text" name="name" placeholder="Your name..." value={this.state.name} onChange={this.handleInputChange} required/>
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email" name="email" placeholder="Your email address..." value={this.state.email} onChange={this.handleInputChange} required/>
                </label>
                <label>
                    <span>Message:</span>
                    <textarea name="message" placeholder="Your message..." value={this.state.message} onChange={this.handleInputChange} cols="5" rows="5" required/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
        return(
            <div className="section">
                <h2 id="Contact">
                    <span><i className="fab fa-wpforms"></i> Contact Me!</span>
                </h2>
                <div style={this.state.formHeight} id="form">
                    <CSSTransitionGroup
                        transitionName="postback"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}>
                        {display}
                    </CSSTransitionGroup>
                </div>
            </div>
        );
    }
}

export default Contact;
