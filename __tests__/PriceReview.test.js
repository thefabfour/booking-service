import React from 'react';
import { render, screen } from '@testing-library/react';

import PriceReview from '../client/src/components/PriceReview';

describe('Price Review', () => {
  it('renders the Price Review component', () => {
    render(<PriceReview price={150} avg={4.85} total={55} />);
    expect(screen.getByText('$150')).toBeInTheDocument();
  });
});
