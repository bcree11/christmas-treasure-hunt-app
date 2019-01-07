import React, { Component } from 'react';
import './App.css';
import Board from './board.js'
import { Button } from 'reactstrap';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Board/>
      </div>
    );
  }
}

export default App;
