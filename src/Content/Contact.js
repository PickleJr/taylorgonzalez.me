import React, { Component } from 'react';

import './contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
    }

    render() {
        return(
            <div className="section">
                <h2 id="Contact">
                    <span><i className="fab fa-wpforms"></i> Contact Me!</span>
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span>Name:</span>
                        <input type="text" name="name" placeholder="Your name..." value={this.state.name} onChange={this.handleInputChange} required/>
                    </label>
                    <label>
                        <span>Email:</span>
                        <input type="text" name="email" placeholder="Your email address..." value={this.state.email} onChange={this.handleInputChange} required/>
                    </label>
                    <label>
                        <span>Message:</span>
                        <textarea name="message" placeholder="Your message..." value={this.state.message} onChange={this.handleInputChange} cols="5" rows="5" required/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Contact;