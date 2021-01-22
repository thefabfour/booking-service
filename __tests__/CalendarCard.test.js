import React from 'react';
import { render, screen, findByText, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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
