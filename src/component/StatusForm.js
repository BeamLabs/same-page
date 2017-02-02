import React, { Component } from 'react';
import '../App.css';
import StatusController from './StatusController';

class StatusForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        // To submit the form, simply use the state.
        this.setState({clicked: this.state.clicked+1})
        console.log(JSON.stringify(this.state))

        // TODO: Form Validation

        if (!this.state.yesterday) {
            alert("Please enter what you did yesterday");
        } else if (!this.state.today) {
            alert("Please enter what going to to today.");
        } else if (!this.state.blocker) {
            alert("Please enter a blocker.");
        } else {
            StatusController.postStatus(this.state.yesterday, this.state.today, this.state.blocker);
        }
    }

    handleInputChange(event) {
        // target is the form element that was changed.
        const target = event.target;

        // checkbox has a different value, checked. this is just from the example
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="App">

                <h3>Yesterday I ...</h3>
                <textarea
                    type="text"
                    name="yesterday"
                    onChange={this.handleInputChange} />

                <h3>Today I will ... </h3>
                <textarea
                    type="text"
                    name="today"
                    onChange={this.handleInputChange} />

                <h3>I am currently blocked by...</h3>
                <textarea
                    type="text"
                    name="blocker"
                    onChange={this.handleInputChange} />

                <div>
                    <button
                        type="button"
                        name="done"
                        onClick={this.handleSubmit}>
                        Submit
                    </button>
                </div>

            </div>
        );
    }
}

export default StatusForm;
