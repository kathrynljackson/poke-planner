import React, { Component } from 'react';
import './Header.scss';

export default function Header() {
    return (
        <header className='header'>
            <section className='header-title'>PokéPlanner</section>
            <nav className='header-links'>
                <a href='/createateam'>My Teams</a>
                <a href='/pokedex'>Pokédex</a>
                <a href='/gymleaders'>Gym Leaders</a>
                <a href='https://github.com/kathrynljackson/poke-planner' target='_blank'>About</a>
            </nav>

        </header>
    )
}