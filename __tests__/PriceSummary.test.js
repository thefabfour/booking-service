import React from 'react';
import { render, screen } from '@testing-library/react';

import PriceSummary from '../client/src/components/PriceSummary';

describe('Price Summary', () => {
  it('renders the Price Review component', () => {
    render(<PriceSummary price={150} cleaning={30} nights={6} />);
    expect(screen.getByText('$1278')).toBeInTheDocument();
  });
});
