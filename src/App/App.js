import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GymLeaders from '../GymLeaders/GymLeaders.js';
import CreateATeam from '../CreateATeam/CreateATeam.js';
import Header from '../Header/Header.js';
import Pokedex from '../Pokedex/Pokedex.js';
import MyTeams from '../MyTeams/MyTeams.js';

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
      this.setState({ myTeams: JSON.parse(localStorage.getItem('teams')) })
    }
  }

  saveTeam = () => {
    localStorage.setItem('teams', JSON.stringify(this.state.myTeams));
  }

  updateState = (value) => {
    this.setState({ myTeams: value })
    this.saveTeam()
  }

  updateResearch = (value) => {
    this.setState({ myTeams: value })
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
              <MyTeams myTeams={this.state.myTeams} />
              <CreateATeam myTeams={this.state.myTeams} updateState={this.updateState}/>
              <Pokedex researchTopic={this.state.researchTopic} updateResearch={this.updateResearch}/> 
            </div>
          )}>
          </Route>
          <Route exact path='/myteams'>
            <MyTeams myTeams={this.state.myTeams}/>
          </Route>
        </div>
      </Router>
    );
  }
}

MyTeams.proptype = {
  myTeams: PropTypes.array,
  researchTopic: PropTypes.object,
  myTeams: PropTypes.array
}

export default App;
