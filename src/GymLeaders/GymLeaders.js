import React, { Component } from 'react';
import './GymLeaders.scss';
import { PropTypes } from 'prop-types';





export const opponentInfo = [
        {
        "image": "https://github.com/kathrynljackson/poke-planner/blob/main/src/GymLeaders/GymLeader-images/milo-game2.png?raw=true",
        "order": 1,
        "gym": "Turffield Gym",
        "leader": "Milo",
        "type": "Grass",
        "pokemon": [
            {
                "pokemonName": "Gossifluer",
                "pokemonId": 829, 
                "pokemonLevel": 19,
                "pokemonType": "Grass",
                "pokemonWeakness": "Fire, Flying, Ice, Poison, and Bug"
            },
                        {
                "pokemonName": "Eldegoss",
                "pokemonId": 830, 
                "pokemonLevel": 20,
                "pokemonType": "Grass",
                "pokemonWeakness": "Fire, Flying, Ice, Poison, and Bug"
            }
        ]

        
        },
        {
            "image": "https://github.com/kathrynljackson/poke-planner/blob/gym-leaders/src/GymLeaders/GymLeader-images/nessa-game.jpg?raw=true",
            "order": 2,
            "gym": "Hulbury Gym",
            "leader": "Nessa",
            "type": "Water",
            "pokemon": [
                {
                    "pokemonName": "Goldeen",
                    "pokemonId": 118, 
                    "pokemonLevel": 20,
                    "pokemonType": "Water",
                    "pokemonWeakness": "Electric, Grass"
                },
                {
                    "pokemonName": "Arrokuda",
                    "pokemonId": 846, 
                    "pokemonLevel": 23,
                    "pokemonType": "Water",
                    "pokemonWeakness": "Electric, Grass"
                },
                {
                    "pokemonName": "Drednaw",
                    "pokemonId": 834, 
                    "pokemonLevel": 24,
                    "pokemonType": "Water, Rock",
                    "pokemonWeakness": "Electric, Grass, Fighting, Ground"
                }
            ]
    
            
        },  
        {
            "image": "https://github.com/kathrynljackson/poke-planner/blob/gym-leaders/src/GymLeaders/GymLeader-images/kabu-game.jpg?raw=true",
            "order": 3,
            "gym": "Motostoke Gym",
            "leader": "Kabu",
            "type": "Fire",
            "pokemon": [
                {
                    "pokemonName": "Ninetales",
                    "pokemonId": 38, 
                    "pokemonLevel": 25,
                    "pokemonType": "Fire",
                    "pokemonWeakness": "Water, Rock, Ground"
                },
                {
                    "pokemonName": "Arcanine",
                    "pokemonId": 59, 
                    "pokemonLevel": 25,
                    "pokemonType": "Fire",
                    "pokemonWeakness": "Water, Rock, Ground"
                },
                {
                    "pokemonName": "Centiskorch",
                    "pokemonId": 851, 
                    "pokemonLevel": 27,
                    "pokemonType": "Fire / Bug",
                    "pokemonWeakness": "Water, Rock, Ground"
                }
            ]
    
            
        },
        {
            "image": "https://github.com/kathrynljackson/poke-planner/blob/gym-leaders/src/GymLeaders/GymLeader-images/allister-game.jpg?raw=true",
            "order": 4,
            "gym": "Stow-on-Side Gym: Pokemon Shield",
            "leader": "Allister",
            "type": "Ghost",
            "pokemon": [
                {
                    "pokemonName": "Yamask",
                    "pokemonId": 562, 
                    "pokemonLevel": 34,
                    "pokemonType": "Ground / Ghost",
                    "pokemonWeakness": "Dark, Steel, Water"
                },
                {
                    "pokemonName": "Cursola",
                    "pokemonId": 864, 
                    "pokemonLevel": 35,
                    "pokemonType": "Ghost",
                    "pokemonWeakness": "Dark, Ghost"
                },
                {
                    "pokemonName": "Mimikyu",
                    "pokemonId": 778, 
                    "pokemonLevel": 34,
                    "pokemonType": "Ghost",
                    "pokemonWeakness": "Ghost, Steel"
                },
                {
                    "pokemonName": "Gengar",
                    "pokemonId": 94, 
                    "pokemonLevel": 36,
                    "pokemonType": "Ghost",
                    "pokemonWeakness": "Ghost, Dark, Psychic"
                }
            ]
    
            
        },
        {
            "image": "https://github.com/kathrynljackson/poke-planner/blob/gym-leaders/src/GymLeaders/GymLeader-images/bea-game.jpg?raw=true",
            "order": 4,
            "gym": "Stow-on-Side Gym: Pokemon Sword",
            "leader": "Bea",
            "type": "Fighting",
            "pokemon": [
                {
                    "pokemonName": "Hitmontop ",
                    "pokemonId": 237, 
                    "pokemonLevel": 34,
                    "pokemonType": "Fighting",
                    "pokemonWeakness": "Psychic, Flying, Fairy"
                },
                {
                    "pokemonName": "Pangoro",
                    "pokemonId": 675, 
                    "pokemonLevel": 34,
                    "pokemonType": "Fighting, Dark",
                    "pokemonWeakness": "Psychic, Flying, Fairy"
                },
                {
                    "pokemonName": "Sirfetch'd",
                    "pokemonId": 865, 
                    "pokemonLevel": 35,
                    "pokemonType": "Fighting",
                    "pokemonWeakness": "Psychic, Flying, Fairy"
                },
                {
                    "pokemonName": "Machamp",
                    "pokemonId": 68, 
                    "pokemonLevel": 36,
                    "pokemonType": "Fighting",
                    "pokemonWeakness": "Psychic, Flying, Fairy"
                }
            ]
    
            
        },
        {
            "image": "https://github.com/kathrynljackson/poke-planner/blob/gym-leaders/src/GymLeaders/GymLeader-images/opal-game.jpg?raw=true",
            "order": 5,
            "gym": "Ballonlea Gym",
            "leader": "Opal",
            "type": "Fairy",
            "pokemon": [
                {
                    "pokemonName": "Weezing",
                    "pokemonId": 110, 
                    "pokemonLevel": 36,
                    "pokemonType": "Poison, Fairy",
                    "pokemonWeakness": "Psychic, Steel"
                },
                {
                    "pokemonName": "Mawile",
                    "pokemonId": 303, 
                    "pokemonLevel": 36,
                    "pokemonType": "Fairy, Steel",
                    "pokemonWeakness": "Ground, Fire"
                },
                {
                    "pokemonName": "Togekiss",
                    "pokemonId": 468, 
                    "pokemonLevel": 37,
                    "pokemonType": " Fairy, Flying",
                    "pokemonWeakness": "Electric, Rock, Ice, Poison, Steel"
                },
                {
                    "pokemonName": "Alcremie",
                    "pokemonId": 869, 
                    "pokemonLevel": 38,
                    "pokemonType": "Fairy",
                    "pokemonWeakness": "Dark, Poison, Steel"
                }
            ]
    
            
        },
        {
            "image": "https://github.com/kathrynljackson/poke-planner/blob/gym-leaders/src/GymLeaders/GymLeader-images/melony-game.jpg?raw=true",
            "order": 6,
            "gym": "Circhester Gym: Pokemon Shield",
            "leader": "Melony",
            "type": "Ice",
            "pokemon": [
                {
                    "pokemonName": "Frosmoth",
                    "pokemonId": 873, 
                    "pokemonLevel": 40,
                    "pokemonType": "Ice, Bug",
                    "pokemonWeakness": "Fire"
                },
                {
                    "pokemonName": "Darmanitan",
                    "pokemonId": 555, 
                    "pokemonLevel": 40,
                    "pokemonType": "Ice",
                    "pokemonWeakness": "Fighting, Steel, Fire, Rock"
                },
                {
                    "pokemonName": "Eiscue",
                    "pokemonId": 875, 
                    "pokemonLevel": 41,
                    "pokemonType": "Ice",
                    "pokemonWeakness": "Fighting, Steel, Fire, Rock"
                },
                {
                    "pokemonName": "Lapras",
                    "pokemonId": 131, 
                    "pokemonLevel": 42,
                    "pokemonType": "Water, Ice",
                    "pokemonWeakness": "Electric, Rock, Fighting, Grass"
                }
            ]
    
            
        },
        {
            "image": "https://github.com/kathrynljackson/poke-planner/blob/gym-leaders/src/GymLeaders/GymLeader-images/gordie-game.jpg?raw=true",
            "order": 6,
            "gym": "Circhester Gym: Pokemon Sword",
            "leader": "Gordie",
            "type": "Rock",
            "pokemon": [
                {
                    "pokemonName": "Barbaracle",
                    "pokemonId": 689, 
                    "pokemonLevel": 40,
                    "pokemonType": "Rock, Water",
                    "pokemonWeakness": "Electric, Grass, Fighting, Ground"
                },
                {
                    "pokemonName": "Shuckle",
                    "pokemonId": 231, 
                    "pokemonLevel": 40,
                    "pokemonType": "Bug, Rock",
                    "pokemonWeakness": "Water, Bug, Steel"
                },
                {
                    "pokemonName": "Stonjourner",
                    "pokemonId": 874, 
                    "pokemonLevel": 41,
                    "pokemonType": "Rock",
                    "pokemonWeakness": "Ground, Fighting, Grass, Ice"
                },
                {
                    "pokemonName": "Coalossal",
                    "pokemonId": 839, 
                    "pokemonLevel": 42,
                    "pokemonType": "Water, Fighting, Ground",
                    "pokemonWeakness": "Water, Fighting, Ground"
                }
            ]
    
            
        },
        {
            "image": "https://github.com/kathrynljackson/poke-planner/blob/gym-leaders/src/GymLeaders/GymLeader-images/piers-game.jpg?raw=true",
            "order": 7,
            "gym": "Spikemuth Gym",
            "leader": "Piers",
            "type": "Dark",
            "pokemon": [
                {
                    "pokemonName": "Scrafty",
                    "pokemonId": 560, 
                    "pokemonLevel": 44,
                    "pokemonType": "Fighting, Dark",
                    "pokemonWeakness": "Fighting, Flying, Fairy"
                },
                {
                    "pokemonName": "Malamar",
                    "pokemonId": 687, 
                    "pokemonLevel": 45,
                    "pokemonType": "Psychic, Dark",
                    "pokemonWeakness": "Bug, Fairy"
                },
                {
                    "pokemonName": "Obstagoon",
                    "pokemonId": 862, 
                    "pokemonLevel": 46,
                    "pokemonType": "Dark, Normal",
                    "pokemonWeakness": "Fighting, Fairy"
                },
                {
                    "pokemonName": "Skuntank",
                    "pokemonId": 435, 
                    "pokemonLevel": 45,
                    "pokemonType": "Poison, Dark",
                    "pokemonWeakness": "Ground"
                }
            ]
    
            
        },
        {
            "image": "https://github.com/kathrynljackson/poke-planner/blob/gym-leaders/src/GymLeaders/GymLeader-images/rhian-game.jpg?raw=true",
            "order": 8,
            "gym": "Hammerlocke Gym",
            "leader": "Raihan",
            "type": "Dragon",
            "pokemon": [
                {
                    "pokemonName": "Flygon",
                    "pokemonId": 330, 
                    "pokemonLevel": 47,
                    "pokemonType": "Ground / Dragon",
                    "pokemonWeakness": "Ice, Fairy, Dragon"
                },
                {
                    "pokemonName": "Gigalith",
                    "pokemonId": 526, 
                    "pokemonLevel": 46,
                    "pokemonType": "Rock",
                    "pokemonWeakness": "Water, Grass, Fighting, Ground, Steel"
                },
                {
                    "pokemonName": "Sandaconda",
                    "pokemonId": 844, 
                    "pokemonLevel": 46,
                    "pokemonType": "Ground",
                    "pokemonWeakness": "Flying, Bug, Grass"
                },
                {
                    "pokemonName": "Duraludon",
                    "pokemonId": 884, 
                    "pokemonLevel": 48,
                    "pokemonType": "Steel, Dragon",
                    "pokemonWeakness": "Ice, Fairy"
                }
            ]
    
            
        }
    ]


export default function GymLeaders() {
    return (
        <div className="gym-leaders-main">
            {opponentInfo.map(opponent => {
                return (
                    <section className={`opponent-card ${opponent.type}`} key={opponent.leader}>
                        <section className='left-side'>
                            <p className='opponent-gym'>{opponent.order}. {opponent.gym}</p>
                            <img className='opponent-image' src={opponent.image} alt={opponent.leader}/>
                            <p className='opponent-leader'>{opponent.leader}</p>
                            <a classname='opponent-type'>{opponent.type} Type</a>
                        </section>
                        <section className='right-side'>
                          {opponent.pokemon.map(monster => {
                              return (
                              <section key={monster.pokemonId} className='opponent-pokemon'>
                                <p className='title-pokemon subtitle'>{monster.pokemonName} </p>
                                <p><a className='subtitle'>Level:</a> {monster.pokemonLevel}</p>
                                <p><a className='subtitle'>Type:</a> {monster.pokemonType}</p>
                                <p><a className='subtitle'>Weakness:</a> {monster.pokemonWeakness}</p>
                              </section>
                              )
                          })}  
                        </section>
                    </section>
                )
            })}
        </div>
    )
}




