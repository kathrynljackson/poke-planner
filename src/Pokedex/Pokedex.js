import React, { Component } from 'react';
import './Pokedex.scss';
import { PropTypes } from 'prop-types';
import AsyncSelect from 'react-select';
import axios from 'axios';

class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectOptions: [],
            researchTopic: [],
            id: '',
            name: '',
        }
    }

    async getOptions(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050`);
        const data = res.data
    
        const options = data.results.map(d => (
            { value: d.url, label: d.name, key: d.name }))
        this.setState({selectOptions: options})
    }

    async getOneMonster(name){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = res.data

        this.setState({ researchTopic: data })
    }


    handleChange(e){
        if(e){
            const informationObject = this.getOneMonster(e.label);
            this.setState({ currentResearch: e });
            
            
        }
    }

    
    componentDidMount(){
        this.getOptions()
    }

    getPicture(){
        if(this.state.researchTopic.sprites){
            return this.state.researchTopic.sprites.front_default;
        }
    }

    getTypes(){
        if(this.state.researchTopic.moves) {
            let theseTypes = this.state.researchTopic.types.map(type => { 
                return <li key={type.type.name}><a className='type-title'>Pokémon Type: </a>{type.type.name}</li>
            
            })
            return theseTypes
        }
    }
    
    render() {
    let monster = this.state.researchTopic;
    let pic = this.getPicture();
    let types = this.getTypes();
    return (
        <div className='pokedex'>
            <p className='pokedex-title'>Research Using The Pokédex</p>
            <AsyncSelect 
                // cacheOptions 
                // defaultOptions 
                options={this.state.selectOptions} 
                onChange={this.handleChange.bind(this)} 
            />   
            <div className='show-pokemon'>
                <p className='monster-name'>{monster.name}</p>
                <img className='monster-sprite' src = {pic} />
                <p>{types}</p>
            </div>
        </div>
        )
    }
}


Pokedex.proptype = {
    selectOptions: PropTypes.array,
    researchTopic: PropTypes.array,
}

export default Pokedex;