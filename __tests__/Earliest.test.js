import React from 'react';
import { render, screen } from '@testing-library/react';

import Earliest from '../client/src/components/Earliest';

describe('Earliest', () => {
  it('renders the Earliest component', () => {
    render(<Earliest date="Apr 13" />);
    expect(screen.getByText('Earliest Availability is Apr 13.')).toBeInTheDocument();
  });
});
