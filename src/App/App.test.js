import App from './App';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('App', () => {

  it.skip('should load Pokedex', () => {

    render(
      <App />
    )

    expect(screen.getByText('Research Using The Pokédex')).toBeInTheDocument();
  })

  it.skip('should load my teams', () => {

    render(
      <App />
    )

    expect(screen.getByText('Your Teams')).toBeInTheDocument();
  })

  it.skip('should load CreateATeam', () => {

    render(
      <App />
    )

    expect(screen.getByText('Select Your Opponent')).toBeInTheDocument();
  })

})




