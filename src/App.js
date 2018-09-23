import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }

  componentDidMount() {
    axios.get(`https://api.legiscan.com/?key=476905b116d0b72a1baefebdbb1e5792&op=getMasterList&state=MN`)
      .then(response => console.log(response.data.masterlist))
      .catch((error) => console.log(error));
  }

  render() {
    console.log()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
