import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forest from './containers/map.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Forest />
      </div>
    );
  }
}

export default App;
