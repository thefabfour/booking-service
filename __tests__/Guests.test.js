import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Guests from '../client/src/components/Guests';

describe('Guests', () => {
  it('renders the Guests component', () => {
    render(<Guests price={150} avg={4.85} total={55} />);
    expect(screen.getByText('GUESTS')).toBeInTheDocument();
  });
});
