import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome!</h1>
          <input placeholder="Search.."></input>
          <button type="submit">Search</button>
        </header>
      </div>
    );
  }
}

export default App;
