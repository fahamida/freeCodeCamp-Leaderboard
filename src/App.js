import React, { Component } from 'react';
import TopBar from './TopBar';
import Chart from './Chart';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <h1> <a href="https://www.freecodecamp.org"  target="_blank" rel="noopener noreferrer">freeCodeCamp</a>
        <a className='fab fa-free-code-camp'>
         </a>  Leaderboard </h1>
        <Chart />
      </div>
    );
  }
}

export default App;
