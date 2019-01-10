import React, { Component } from 'react';
import './App.css';
import Card from "./cards";

class App extends Component {
  onClick = event =>{
    
        }
  }
  render() {
    return (
      <div className="App">
        <header className="App-nav">
          <Card onClick = {this.onClick}/>
        </header>
      </div>
    );
  }

export default App;
