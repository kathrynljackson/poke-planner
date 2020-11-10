import React, { Component } from 'react';
import './Pokedex.scss';
import { PropTypes } from 'prop-types';
import { fetchMonstersByName} from '../fetch/fetch.js';
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
        console.log('DATA', data);
    
        const options = data.results.map(d => (
            { value: d.url, label: d.name, key: d.name }))

        this.setState({selectOptions: options})

    }

    async getOneMonster(name){
        console.log('GETONEMONSTER IS RUNNING')
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = res.data
        console.log('SINGLE DATA', data);

        this.setState({ researchTopic: data })
    }


    handleChange(e){
        // console.log('HandleChange', e, this.state);
        // console.log('POKEDEX STATE', this.state);
        if(e){
            const informationObject = this.getOneMonster(e.label);
            console.log(informationObject);
            this.setState({ currentResearch: e });
            
            
        }
        // this.getOneMonster(e.name);
       
      }

    
    componentDidMount(){
        this.getOptions()
    }

    getPicture(){
        if(this.state.researchTopic.sprites){
            console.log('GET PICTURE', this.state.researchTopic.sprites)
            console.log('GET ONE PICTURE', this.state.researchTopic.sprites.front_default)

            return this.state.researchTopic.sprites.front_default;
        }
    }

    getTypes(){
        if(this.state.researchTopic.moves) {
            let theseTypes = this.state.researchTopic.types.map(type => { 
                console.log(type.type.name);
                return <li key={type.type.name}><a className='type-title'>Pokémon Type: </a>{type.type.name}</li>
            
            })
            return theseTypes
        }
    }
    
    render() {
    console.log('RENDER', this.state.researchTopic)
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