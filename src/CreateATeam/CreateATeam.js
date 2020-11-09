import React, { Component, useState } from 'react';
import './CreateATeam.scss';
import { opponentInfo } from '../GymLeaders/GymLeaders.js';
import { PropTypes } from 'prop-types';
import { fetchMonstersByName} from '../fetch/fetch.js';
import AsyncSelect from 'react-select';
import axios from 'axios';
import Multi from 'multi';

class CreateATeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opponent: '',
            monsters:[],
        }
        //this.handleChange = this.handleChange.bind(this)
    }

    async getOptions(){
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050');
        const data = res.data
        console.log('DATA', data);
    
        const options = data.results.map(d => (
            { value: d.url, label: d.name, key: d.name }))

        this.setState({ selectOptions: options })

    }


    handleChange(e){
        console.log('HandleChange', e);
        console.log('STATE', this.state);
        if(e){
            this.setState({ opponent: e.value });
            console.log('STATE2', this.state);
        } 
    }

    handleChange2(e){
        console.log('HandleChange2', e);
        console.log('HANDLING CHANGE 1', this.state);
        if(e){
            this.setState({ monsters: e });
            console.log('HANDLING CHANGE 2', this.state);
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
    
    render() {
    // console.log('RENDER', this.state.selectOptions)
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
                    isMulti 
                    // cacheOptions 
                    // defaultOptions 
                    options={this.state.selectOptions} 
                    onChange={this.handleChange2.bind(this)} 
                    placeholder='Search by Pokémon name...'
                />
            </div>
        </div>
        )
    }
}


CreateATeam.proptype = {
    opponent: PropTypes.object,
    newTeam: PropTypes.array,
}

export default CreateATeam;

