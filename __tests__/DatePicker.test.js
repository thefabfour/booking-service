import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DatePicker from '../client/src/components/DatePicker';

describe('DatePicker', () => {
  it('renders the DatePicker component', () => {
    render(<DatePicker />);
    expect(screen.getByText('CHECK-IN')).toBeInTheDocument();
  });
});
