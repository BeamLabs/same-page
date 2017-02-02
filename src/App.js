import React, { Component } from 'react';
import './App.css';
import StatusForm from './component/StatusForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Same Page</h2>
        </div>
        <StatusForm />
      </div>
    );
  }
}

export default App;
