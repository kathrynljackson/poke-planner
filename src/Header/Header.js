import React from 'react';
import './Header.scss';

export default function Header() {
    return (
        <header className='header'>
            <section className='header-title'>PokéPlanner</section>
            <nav className='header-links'>
                <a href='/myteams'>My Teams</a>
                <a href='/createateam'>Create A Team</a>
                <a href='/gymleaders'>Gym Leaders</a>
                <a href='https://github.com/kathrynljackson/poke-planner' target='_blank' rel="noreferrer">About</a>
            </nav>

        </header>
    )
}

Header.proptype = {
    //no props
}