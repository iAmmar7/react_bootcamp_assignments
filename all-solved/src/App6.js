
import React from 'react';
import logo from './logo.svg';
import './App.css';

function AddButton(props) {
  return (
    <button disabled={props.disabled}>
      Add
    </button>
  )
}

function InputField(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onClick={props.onClick}
    />
  )
}

function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <InputField
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onClick={props.onClick}
      />
      <AddButton disabled={props.disabled} />
    </form>
  )
}

function DeleteButton(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      Delete Last Item
    </button>
  )
}

function ListItem(props) {
  return (
    <div>
      <p>Item List</p>
      <ol>
        {props.itemList.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
    </div>
  )
}

class App extends React.Component {
  state = {
    value: '',
    itemList: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClick = event => {
    this.setState({ value: '' });
  };

  addNewItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      itemList: [...oldState.itemList, this.state.value],
    }));
  };

  removeLastItem = event => {
    this.setState(prevState => ({ itemList: this.state.itemList.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.itemList.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>
        </header>
        <h2>ToDo List</h2>
        <Form
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
          onClick={this.handleClick}
          disabled={this.inputIsEmpty()}
          onSubmit={this.addNewItem}
        />
        <DeleteButton onClick={this.removeLastItem} disabled={this.noItemsFound()} />
        <ListItem itemList={this.state.itemList} />
      </div>
    );
  }
}

export default App;


