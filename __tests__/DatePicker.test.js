import React from 'react';
import { render, screen } from '@testing-library/react';

import DatePicker from '../client/src/components/DatePicker';

describe('DatePicker', () => {
  it('renders the DatePicker component', () => {
    render(<DatePicker toggle={() => {}} card />);
    expect(screen.getByText('CHECK-IN')).toBeInTheDocument();
  });
});
