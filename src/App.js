import React, { Component } from 'react';
import './App.css';
import Router from './router';
import NavBar from './components/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
<NavBar/>
{Router}
      </div>
    );
  }
}

export default App;
