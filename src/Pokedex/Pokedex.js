import React, { Component } from 'react';
import './Pokedex.scss';
import { opponentInfo } from '../GymLeaders/GymLeaders.js';
import { PropTypes } from 'prop-types';
import { fetchMonstersByName} from '../fetch/fetch.js';
import AsyncSelect from 'react-select';
import axios from 'axios';
import Multi from 'multi';

class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectOptions: [],
            id: '',
            name: '',
        }
    }

    async getOptions(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050`);
        const data = res.data
        console.log('DATA', data);
    
        const options = data.results.map(d => (
            { value: d.url, label: d.name, key: d.name }))

        this.setState({selectOptions: options})

    }

    async getOneMonster(name){
        console.log('GETONEMONSTER IS RUNNING')
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = res.data
        console.log('DATA', data);
    
        const topic = data.map( d => (
            
            console.log({ value: d.name, label: d.name, key: d.name }))
           
        )
        this.setState({ researchTopic: topic })

    }

    updateResearch = (value) => {
        this.setState({ researchTopic: value })
      }


    handleChange(e){
        console.log('HandleChange', e, this.state);
        console.log('STATE', this.state);
        if(e){
            console.log('STATE2', this.state);
            fetchMonstersByName(e.key)
            .then(response => console.log('RESPONSE', response))
            .then(response => this.updateResearch(response));
            
            
        }
        this.getOneMonster(e.name);
       
      }

    
    componentDidMount(){

            this.getOptions()
        
    }
    
    render() {
    console.log('RENDER', this.state.selectOptions)
    return (
        <div className='pokedex'>
            <p className='pokedex'>Research Using The Pokédex</p>
            <AsyncSelect cacheOptions defaultOptions options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
            
        </div>
        )
    }
}


// Pokedex.proptype = {
//     opponent: PropTypes.object,
//     newTeam: PropTypes.array,
// }

export default Pokedex;