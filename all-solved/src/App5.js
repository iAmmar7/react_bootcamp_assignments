import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function InputField(props) {
  return(
    <input 
      name={props.inputValue}
      onChange={props.update} 
      type="text"
      placeholder="Write your text here" />
  )
}

function Output(props) {
  return(
    <p className="echo">You are saying: <span>{props.inputValue}</span></p>
  )
}

class App extends Component {
  state = {
      inputValue: ''
  };

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>
        </header>
        <div className="container">
          <InputField
            inputValue={this.state.inputValue}
            update={this.updateInputValue.bind(this)}
          />
          <Output inputValue={this.state.inputValue} />
          <p>What ever you type into the input field it should reflect here.</p>
        </div>
      </div>
    );
  }
}

export default App;

