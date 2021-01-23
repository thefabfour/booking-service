import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../client/src/App'

describe('App', () => {
  it('renders the App component', () => {
    const {debug} = render(<App />);
    expect(screen.getByText('Check Availability')).toBeInTheDocument();
  });
});
