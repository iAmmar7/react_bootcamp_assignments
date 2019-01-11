import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const users = [{ username: 'Ammar' }, { username: 'Aamir_Pinger' }];

const messages = [
  { username: 'Ammar', text: 'Hi, Aamir!' },
  { username: 'Ammar', text: 'How are you?' },
  { username: 'Aamir_Pinger', text: 'Hello, {Ammar}! Good n you?' },
];

function MessageDisplay(props) {
  return (
    <div>
      <h2>GhupShap Chat App</h2>
      <div className="name sender">{props.username}</div>
      <ul className="message-list">
        {props.messages.map((msg, index) => (
          <li
            key={index}
            className={
              msg.username === users[0].username ? 'message sender' : 'message recipient'
            }
          >
            <p>{`${msg.username}: ${msg.text}`}{console.log(props.messages)}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function InputSend(props) {
  return (
    <div>
      <form className="input-group" onSubmit={props.addMessage}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          onChange={props.inputChange}
          onClick={props.inputClick}
        />
        <div className="input-group-append">
          <button
            className="btn submit-button"
            disabled={props.isDisabled}>
            SEND
          </button>
        </div>
      </form>
    </div>
  )
}

class MessageSend extends Component {
  render() {
    return (
      <div>
        <div className="chat-window">

          <MessageDisplay
            messages={this.props.messages}
            username={this.props.username}
          />
          <InputSend
            addMessage={this.props.addMessage}
            inputChange={this.props.inputChange}
            inputClick={this.props.inputClick}
            isDisabled={this.props.isDisabled}
          />
        </div>
      </div>
    );
  }
}

class App extends Component {
  state = {
    username: users,
    messages: messages,
    myText: ''
  };

  addMessage = event => {
    event.preventDefault();
    this.setState(oldState => ({
      messages: [...oldState.messages, { username: this.state.username, text: this.state.myText }]
    }))
  };

  inputChange = event => {
    this.setState({
      myText: event.target.value
    })
  };

  inputClick = event => {
    event.target.value = '';
    this.setState({ myText: '' })
  };

  isDisabled = () => {
    return this.state.myText === '';
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>
        </header>
        <div className="shell">

          <MessageSend
            inputChange={this.inputChange}
            inputClick={this.inputClick}
            isDisabled={this.isDisabled()}
            addMessage={this.addMessage}
            username={users[0].username}
            messages={this.state.messages}
            myText={this.state.myText}
          />

          <MessageSend
            inputChange={this.inputChange}
            inputClick={this.inputClick}
            isDisabled={this.isDisabled()}
            addMessage={this.addMessage}
            username={users[1].username}
            messages={this.state.messages}
            myText={this.state.myText}
          />
        </div>
      </div>
    );
  }
}

export default App;


