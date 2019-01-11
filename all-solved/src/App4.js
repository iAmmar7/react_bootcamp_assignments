import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const number1 = Math.floor(Math.random() * 100);
// const number2 = Math.floor(Math.random() * 100);
// const number3 = Math.floor(Math.random() * 100);
// const proposedAnswer = Math.floor(Math.random() * 3);
// const numQuestions = 0;
// const numCorrect = 0;

function Question(props) {
  return (
    <p>
      {`${props.num1} + ${props.num2} + ${props.num3} = ${props.propAns + props.num1 + props.num2 + props.num3}`}
    </p>
  )
}
function Button(props) {
  return(
    <div>
      <button onClick={props.checkTrue}>True</button>
      <button onClick={props.checkFalse}>False</button>
    </div>
  )
}
function Answer(props) {
  return (
    <p>
      You have answered {props.numCor} correctly out of total {props.numQues} questions.
    </p>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: Math.floor(Math.random() * 10),
      number2: Math.floor(Math.random() * 10),
      number3: Math.floor(Math.random() * 10),
      proposedAnswer: Math.floor(Math.random() * 3),
      numQuestions: 0,
      numCorrect: 0
    }
    this.checkAnswerTrue = this.checkAnswerTrue.bind(this);
    this.checkAnswerFalse = this.checkAnswerFalse.bind(this);
  }

  checkAnswerTrue() {
    this.setState({
      number1: Math.floor(Math.random() * 10),
      number2: Math.floor(Math.random() * 10),
      number3: Math.floor(Math.random() * 10),
      proposedAnswer: Math.floor(Math.random() * 3),
      numQuestions: this.state.numQuestions + 1
    })
    if (this.state.number1 + this.state.number2 + this.state.number3 === this.state.proposedAnswer + this.state.number1 + this.state.number2 + this.state.number3) {
      this.setState({
        numCorrect: this.state.numCorrect + 1
      })
    }
  }

  checkAnswerFalse() {
    this.setState({
      number1: Math.floor(Math.random() * 10),
      number2: Math.floor(Math.random() * 10),
      number3: Math.floor(Math.random() * 10),
      proposedAnswer: Math.floor(Math.random() * 3),
      numQuestions: this.state.numQuestions + 1
    })
    if (this.state.number1 + this.state.number2 + this.state.number3 !== this.state.proposedAnswer + this.state.number1 + this.state.number2 + this.state.number3) {
      this.setState({
        numCorrect: this.state.numCorrect + 1
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>ADD THE NUMBERS GAME</h2>
          <Question num1={this.state.number1} num2={this.state.number3} num3={this.state.number3} propAns={this.state.proposedAnswer} />
          <Button checkTrue={this.checkAnswerTrue} checkFalse={this.checkAnswerFalse} />
          <Answer numCor={this.state.numCorrect} numQues={this.state.numQuestions} />
        </div>
      </div>
    );
  }

}

export default App;

