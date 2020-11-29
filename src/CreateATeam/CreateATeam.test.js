import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateATeam from './CreateATeam.js';

describe('CreateATeam', () => {

    const mockTeam = [{
        "id": 1604970721450,
        "opponent": {
            "gym": "Ballonlea Gym",
            "image": "https://github.com/kathrynljackson/poke-planner/blob/gym-leaders/src/GymLeaders/GymLeader-images/opal-game.jpg?raw=true",
            "leader": "Opal",
            "order": 5,
            "pokemon": [
            { "pokemonId": 110,
                "pokemonLevel": 36,
                "pokemonName": "Wheezing",
                "pokemonType": "Poison, Fairy",
                "pokemonWeakness": "Psychic, Steel" },
            { "pokemonId": 303,
                "pokemonLevel": 36,
                "pokemonName": "Mawilw",
                "pokemonType": "Steel, Fairy",
                "pokemonWeakness": "Ground, Fire" }
            ],
            "type": "Fairy"
        },
        "team": [
            {"key": "ivysaur",
            "label": "ivysaur",
            "value": "https://pokeapi.co/api/v2/pokemon/2/"},
            {"key": "pikachu",
            "label": "pikachu",
            "value": "https://pokeapi.co/api/v2/pokemon/25/"},
            {"key": "gyarados",
            "label": "gyarados",
            "value": "https://pokeapi.co/api/v2/pokemon/130/"}

        ]
    }]

    it.skip('saves a team onClick', () => {
        const mockSave = jest.fn();
        const mockUpdate = jest.fn();

       render(
           <CreateATeam myTeams={mockTeam} saveTeam={mockSave} updateState={mockUpdate}/>
       ) 

       fireEvent.click(screen.getByRole('button'))
       expect(mockSave).toHaveBeenCalled();
    })

    it('should show Pokémon options', async () => {
        const mockSave = jest.fn();
        const mockUpdate = jest.fn();

       render(
           <CreateATeam myTeams={mockTeam} saveTeam={mockSave} updateState={mockUpdate}/>
       ) 
       expect.assertions(1);
        const monsterTitle = await waitFor(() => screen.getByText('Select Your Team'))
       expect(monsterTitle).toBeInTheDocument();
    })
})