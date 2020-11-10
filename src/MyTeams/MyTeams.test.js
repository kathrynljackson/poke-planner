import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyTeams from './MyTeams';

describe('MyTeams', () => {
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

    it('should render all saved teams', () => {
        render(
            <MyTeams myTeams={mockTeam}/>
        )
        expect(screen.getByText("gyarados")).toBeInTheDocument();
    })

})