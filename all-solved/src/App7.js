import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    userName: '',
    gamesPlayed: '0',
    showOrHide: 'Hide no of games played by user'
  };

  handleChange = (event) => {
    this.setState({
      userName: event.target.value
    })
  };

  hideGame = (event) => {
    if (this.state.showOrHide === 'Hide no of games played by user') {
      this.setState({
        gamesPlayed: '*',
        showOrHide: 'Show no of games user played'
      })
    }
    if (this.state.showOrHide === 'Show no of games user played') {
      this.setState({
        gamesPlayed: '0',
        showOrHide: 'Hide no of games played by user'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>
        </header>
        <form onSubmit={this.addnewUser}>
          <input placeholder="Enter Username" onChange={this.handleChange} />
        </form>
        <button onClick={this.hideGame}>{this.state.showOrHide}</button>
        <p> {this.state.userName} has played {this.state.gamesPlayed} games </p>
      </div>
    );
  }
}

export default App;