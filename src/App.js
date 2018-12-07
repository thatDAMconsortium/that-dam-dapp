import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <body>
          
          <p>Search address balances:</p>
          <div className="searchBar">
            <input type="text" id="name" name="name" size="75"/>
            <button onClick={() => this.handleClick()}>search balance</button>
          </div>

          <p>Balance: {this.state.balance}</p>

        </body>
      </div>
    );
  }

  handleClick() {
    this.setState({balance: 'dope'})
  }
}



export default App;