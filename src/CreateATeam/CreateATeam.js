import React, { Component } from 'react';
import './CreateATeam.scss';
import { opponentInfo } from '../GymLeaders/GymLeaders.js';
import { PropTypes } from 'prop-types';
import AsyncSelect from 'react-select';
import axios from 'axios';

class CreateATeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opponent: '',
            monsters:[],
            newEntry:{},
        }
    }

    async getOptions(){
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050');
        const data = await res.data
    
        const options = data.results.map(d => (
            { value: d.url, label: d.name, key: d.name }))

        this.setState({ selectOptions: options })

    }


    handleChange(e){
        if(e){
            this.setState({ opponent: e.value });
        } 
    }

    handleChange2(e){
        if(e){
            this.setState({ monsters: e });
        } 
    }

    getOptions2(){
        const options = opponentInfo.map(d => (
            { value: d, label: d.gym, key: d.leader }))
    
        this.setState({opponentOptions: options})
    }

    componentDidMount(){
        this.getOptions()
        this.getOptions2()
    }

    saveTeam = async (leader, pokemon) => {
        await this.setState({ newEntry: {
            id: Date.now(),
            opponent: leader,
            team: pokemon
        }})
        let newArray = this.props.myTeams.concat(this.state.newEntry)
        this.props.updateState(newArray)
    }


    
    render() {
    return (
        <div className='create-a-team'>
            <div className='select-opponent'>
            <p className='select-opponent-title'>Select Your Opponent</p>
            <AsyncSelect 
                cacheOptions 
                defaultOptions 
                options={this.state.opponentOptions} 
                onChange={this.handleChange.bind(this)} 
            />
            </div>
            <div className='select-monsters'>
                <p className='select-monsters-title'>Select Your Team</p>
                <AsyncSelect
                    aria label='Search Pokémon By Name' 
                    isMulti 
                    options={this.state.selectOptions} 
                    onChange={this.handleChange2.bind(this)} 
                    placeholder='Search by Pokémon name...'
                />
            </div>
            <button role='button' className='save-team-button' onClick={(event) => { this.saveTeam(this.state.opponent, this.state.monsters) }}>Save Team</button>
        </div>
        )
    }
}


CreateATeam.proptype = {
    opponent: PropTypes.any,
    monsters: PropTypes.array,
    newEntry: PropTypes.object
}

export default CreateATeam;

