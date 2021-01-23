import React from 'react';
import { render } from '@testing-library/react';

import CalendarCard from '../client/src/components/CalendarCard';

describe('Calendar Card', () => {
  it('renders the Calendar Card component', () => {
    render(
    <CalendarCard
      clearDates={() => {}}
      toggle={() => {}}
      dateSelect={() => {}}
    />);
  });
});
