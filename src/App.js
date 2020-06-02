import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import AdministratorForm from './components/AdministratorForm';
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

  setLessonRoutes(tutorials) {
    const routes = []
    for (let i = 0; i < tutorials.length; i++) {
      for (let j = 0; j < tutorials[i].lessons.length; j++) {
        routes.push(
          <Route exact path={`/tutorials/${tutorials[i].id}/lessons/${j + 1}`} key={`${i}${tutorials[i].lessons[j].id}`} render={() => {
            return <Tutorial tutorial={tutorials[i]} lesson={tutorials[i].lessons[j]} />
          }} />
        );
      }
    }
    return routes;
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
          <Route exact path="/about" render={() => {
            return <About />
          }} />
          <Route exact path="/admin" render={() => {
            return <AdministratorForm />
          }} />
          {this.setLessonRoutes(this.state.tutorials)}
        </Router>
      </div>
    );
  }
}

export default App;
