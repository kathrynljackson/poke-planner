import React from 'react';
import { render, screen, waitForgit } from '@testing-library/react';
import '@testing-library/jest-dom';
import GymLeaders from './GymLeaders';
import opponentInfo from './GymLeaders.js';

describe('GymLeaders', () => {
    //const mockInfo = opponentInfo;

    it('should render all gym leader names', () => {
        render(
            <GymLeaders />
        )
        expect(screen.getByText("Milo")).toBeInTheDocument();
    })

    it('should render all gym leader types', () => {
        render(
            <GymLeaders />
        )
        expect(screen.getByText("Fairy")).toBeInTheDocument();
    })

    it('should render all gym leader pokemon', () => {
        render(
            <GymLeaders />
        )
        expect(screen.getByText("Flygon")).toBeInTheDocument();
    })

    it('should render all gym leader pokemon levels', () => {
        render(
            <GymLeaders />
        )
        expect(screen.getByText("44")).toBeInTheDocument();
    })
})