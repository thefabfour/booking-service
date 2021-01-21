import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calendar from '../client/src/components/Calendar';


describe('Calendar', () => {
  it('renders the Calendar component', () => {
      const calendar = [{ month: 'January', year: 2021, days: [null, null, null, null, null, { day: 1, avail: true }, { day: 2, avail: true }, { day: 3, avail: true }, { day: 4, avail: true }, { day: 5, avail: true }, { day: 6, avail: true }, { day: 7, avail: true }, { day: 8, avail: true }, { day: 9, avail: true }, { day: 10, avail: true }, { day: 11, avail: true }, { day: 12, avail: true }, { day: 13, avail: true }, { day: 14, avail: true }, { day: 15, avail: true }, { day: 16, avail: true }, { day: 17, avail: true }, { day: 18, avail: true }, { day: 19, avail: true }, { day: 20, avail: true }, { day: 21, avail: true }, { day: 22, avail: true }, { day: 23, avail: true }, { day: 24, avail: true }, { day: 25, avail: true }, { day: 26, avail: true }, { day: 27, avail: true }, { day: 28, avail: true }, { day: 29, avail: true }, { day: 30, avail: true }, { day: 31, avail: true }]}]
    render(
      <Calendar
        month={calendar[0].month}
        year={calendar[0].year}
        days={calendar[0].days}
        direction="left"
        move={() => {}}
      />);
    expect(screen.getByText('January 2021')).toBeInTheDocument();
  });
});
