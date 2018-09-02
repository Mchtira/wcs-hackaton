import React, { Component } from 'react';
import Forest from './containers/map.js'
import Fight from './containers/Fight.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Forest />
      </div>
    )
  }
}

export default App;
