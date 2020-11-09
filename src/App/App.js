import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GymLeaders, { SelectOpponent } from '../GymLeaders/GymLeaders.js';
import CreateATeam from '../CreateATeam/CreateATeam.js';
import Header from '../Header/Header.js';
import Pokedex from '../Pokedex/Pokedex.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      researchTopic: {},
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

  saveTeam = () => {
    localStorage.setItem('teams', JSON.stringify(this.state.myTeams));
  }

  updateState = (value) => {
    this.setState({ myTeams: value })
    this.saveTeams()
  }

  updateResearch = (value) => {
    this.setState({ researchTopic: value })
  }

  render() {
    return (
      <Router>
        <Header />
        <div className="App">
          <Route exact path='/gymleaders'>
            <GymLeaders />
          </Route>
          <Route exact path='/createateam' render={props => (
            <div>
              <CreateATeam myTeams={this.state.myTeams} />
              <Pokedex researchTopic={this.state.researchTopic} updateResearch={this.updateResearch}/>
              
            </div>
          )}>
            
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
