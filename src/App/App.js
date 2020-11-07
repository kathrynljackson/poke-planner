import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GymLeaders from '../GymLeaders/GymLeaders';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/gymleaders'>
            <GymLeaders />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
