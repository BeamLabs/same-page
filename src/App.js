import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// TODO: Abstract out the form into it's own component, and just get the state of the form when the submit button is clicked
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    };


    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // To submit the form, simply use the state.
    this.setState({clicked: this.state.clicked+1})
    console.log(JSON.stringify(this.state))
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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form>
          <label>
            Name:
            <input 
              type="text" 
              name="name"
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="submit" />
        </form>
        
        <h3>Yesterday I ...</h3>
        <input type="text" name="yesterday" />

        <h3>Today I will ... </h3>
        <input 
          type="text" 
          name="today"
          onChange={this.handleInputChange} />

        <h3>I am currently blocked by...</h3>
        <input 
          type="text" 
          name="blocker"
          onChange={this.handleInputChange} />

        <button type="button" name="done" onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default App;
