import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Tutorials from './containers/Tutorials';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tutorials type="recent" />
        <Footer />
      </div>
    );
  }
}

export default App;
