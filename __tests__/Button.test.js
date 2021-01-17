import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Button from '../client/src/components/Button'

describe('Button', () => {
  it('renders the Button component', () => {
    render(<Button>Reserve</Button>);
    expect(screen.getByText('Reserve')).toBeInTheDocument();
  });
});
