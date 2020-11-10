import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Header from './Header.js'

describe('Header', () => {
    it('should render all links', () => {
        render(
            <Header />
        )
        expect(screen.getByText("Create A Team")).toBeInTheDocument();
        expect(screen.getByText("My Teams")).toBeInTheDocument();
        expect(screen.getByText("Gym Leaders")).toBeInTheDocument();
    })
})