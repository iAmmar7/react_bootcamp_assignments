import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

/*
Use React and the data below to display a list of people alongside their books they like.

Fazal Deen's likes a Imran Series book.

For detailed instructions, refer to instructions.md.
*/

const chart = [
  {
    id: 1,
    peepsID: '1',
    bookLikedID: '1',
  },
  {
    id: 2,
    peepsID: '2',
    bookLikedID: '1',
  },
  {
    id: 3,
    peepsID: '4',
    bookLikedID: '5',
  },
  {
    id: 4,
    peepsID: '5',
    bookLikedID: '2',
  },
  {
    id: 5,
    peepsID: '3',
    bookLikedID: '5',
  },
  {
    id: 6,
    peepsID: '6',
    bookLikedID: '4',
  },
];

const peeps = {
  1: {
    id: 1,
    name: 'Fazal Deen',
    readerCategory: 'champ',
  },
  2: {
    id: 2,
    name: 'Irfan',
    readerCategory: 'rising-star',
  },
  3: {
    id: 3,
    name: 'Muneeb',
    readerCategory: 'beginner',
  },
  4: {
    id: 4,
    name: 'Osama',
    readerCategory: 'champ',
  },
  5: {
    id: 5,
    name: 'Najam',
    readerCategory: 'champ',
  },
  6: {
    id: 6,
    name: 'Aamir',
    readerCategory: 'beginner',
  },
};

const books = {
  1: {
    id: 1,
    name: 'Imran Series',
  },
  2: {
    id: 2,
    name: 'Harry Potter',
  },
  3: {
    id: 3,
    name: 'I Am Malala',
  },
  4: {
    id: 4,
    name: 'Bang-e-Dara by Allama Iqbal',
  },
  5: {
    id: 5,
    name: 'Jokes 101',
  },
};

// function DisplayList() {
//   const obj = [];

//   for (let i in chart) {
//     for (var j = 1; j <= 6; j++) {
//       if (Number(chart[i].peepsID) === j) {
//         obj[i] = peeps[j].name;
//       }
//     }
//     for (var k = 1; k <= 6; k++) {
//       if (Number(chart[i].bookLikedID) === k) {
//         obj[i] = `${obj[i]}'s likes a ${books[k].name} book`
//       }
//     }
//   }

//   const list = obj.map((value, index) => {
//     return(
//       <li
//         style={{ padding: '5px', fontSize: '20px' }}
//         key={index}
//       >
//         {value}
//       </li>
//     )
//   })

//   return (
//     <ol style={{ width: '1000px', margin: 'auto' }}>
//       {list} {console.log(obj)}
//     </ol>
//   )
// }

const string = chart.map(item => {
  return `${peeps[item.peepsID].name}'s likes ${books[item.bookLikedID].name} book`
});

const List = () => {
  return (
    <ul>
      {string.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
};

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Practice</h1>
        </header>
        <h2>Book People liked</h2>
        <List />
      </div>
    );
  }
}

export default App;

