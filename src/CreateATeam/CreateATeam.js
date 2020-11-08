import React, { Component } from 'react';
import './CreateATeam.scss';
import { opponentInfo } from '../GymLeaders/GymLeaders.js';
import { PropTypes } from 'prop-types';
import { fetchMonstersByName} from '../fetch/fetch.js';

class CreateATeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: {},
            typedName:'',
            myOpponent: '',
            newTeam: {},
        }
    }

    searchByName = (name) => {
        return fetchMonstersByName(name)
        .then(response => console.log(response))
        .then(data => this.setState({ searchResult: data }))
        .catch(err => alert('There are no Pokémon by that name.'));
    }

    updateSearch = (event) => {
        console.log(this.state.searchResult);
        this.setState({[event.target.name]: event.target.value});
    }

    theSearchResults = (name) => {
        if (name){
            let monster = fetchMonstersByName(name);
            console.log(monster.name)
            return(
                <p>{monster.name}</p>
            )
        }

    }


    render() {
        return(

            <div>
                <section className='your-team'>
                    <p>Your Team So Far</p>

                </section>
                <section className='choose-opponent'>
                    <p className='title'>Choose Your Opponent</p>
                    <section>
                        {opponentInfo.map(opponent => {
                            return (
                                <div className={`team-opponenet ${opponent.type}`} key={opponent.leader}>
                                    <p className='gym'>{opponent.order}. {opponent.gym}</p>
                                    <img className='image' src={opponent.image} alt={opponent.leader}/>
                                    <p className='leader'>{opponent.leader}</p>
                                    <p>{opponent.type}</p>
                                </div>
                            )
                        })}
                    </section>
                </section>
                <section className='pokemon-list'>
                    <p className='title'>Build Your Team</p>
                    <input className='search-input search-by-name' value={this.state.typedName} as="textarea" name="typedName" onChange={(event) => this.updateSearch(event)} placeholder='Search By Name'/>
                    <button className='name-button' onClick={(event) => {this.searchByName(this.state.typedName)}}>Search</button>
                    <p className='subtitle'>Search Results:</p>
                    <section className='search-results'>
                        {() => this.theSearchResults(this.state.typedName)}
                    </section>
                </section>
            </div>
        )
    }
}

CreateATeam.proptype = {
    opponent: PropTypes.object,
    newTeam: PropTypes.array,
}

export default CreateATeam;

