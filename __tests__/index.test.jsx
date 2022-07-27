import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
});

beforeEach(() => {
    render(<Home />)
})
 
test('it welcomes the user to the login page', async() => {
    expect(screen.getByText('Welcome, New User, this is the login page.')).toBeInTheDocument();
})

test('it says authentication coming soon', async() => {
    expect(screen.getByText('Authentication coming soon.')).toBeInTheDocument();
})

test('it has two log in links', async() => {
    expect(screen.getAllByText('Log In').length).toEqual(2);
})



