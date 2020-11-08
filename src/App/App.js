import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GymLeaders from '../GymLeaders/GymLeaders';
import CreateATeam from '../CreateATeam/CreateATeam.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myTeams: []
    }
  }

  componentDidMount() {
    this.getTeams();
  }

  getTeams = () => {
    if (JSON.parse(localStorage.getItem('teams'))) {
      this.setState({ TeamsEntries: JSON.parse(localStorage.getItem('teams')) })
    }
  }

  saveTeams = () => {
    localStorage.setItem('teams', JSON.stringify(this.state.myTeams));
  }

  updateState = (value) => {
    this.setState({ myTeams: value })
    this.saveTeams()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/gymleaders'>
            <GymLeaders />
          </Route>
          <Route exact path='/createateam' render={() => (
            <CreateATeam myTeams={this.state.myTeams} />
          )}/>
            
          
        </div>
      </Router>
    );
  }
}

export default App;
