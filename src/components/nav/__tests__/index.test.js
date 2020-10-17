import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
import { exportAllDeclaration } from '@babel/types';
import { describe } from 'yargs';

// call the cleanup function using the afterEach global function from Jest:
afterEach(cleanup);
// use the describe function to declare the component we're testing, by adding the following code:
describe('Nav component', () => {
    // First Test
    it('renders', () => {
        render(<Nav />);
    });
    // Second Test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
      
        expect(asFragment()).toMatchSnapshot();
      });
});

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);
  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
  })   

  describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
      });
  })