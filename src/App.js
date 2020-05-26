import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Tutorials from './containers/Tutorials';
import Tutorial from './components/Tutorial';

import './App.css';

class App extends Component {
  state = { tutorials: [] };

  componentDidMount() {
    fetch("http://localhost:3000/tutorials")
    .then(r => r.json())
    .then(o => {
      this.setState({
        tutorials: o
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route path='/' render={() => {
            return (
              <>
              <Header />
              <Footer />
              </>
            );
          }} />
          <Route exact path='/' render={() => {
            return <Tutorials type="recent" tutorials={this.state.tutorials} />
          }} />
          {this.state.tutorials.map((tutorial, index) => {
            return (
              <Route exact path={`/tutorials/${index + 1}`} key={index} render={() => {
                return <Tutorial tutorial={tutorial} />
              }} />
            );
          })}
        </Router>
      </div>
    );
  }
}

export default App;
