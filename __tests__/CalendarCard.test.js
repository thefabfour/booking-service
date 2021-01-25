import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, cleanup } from '@testing-library/react';

import CalendarCard from '../client/src/components/CalendarCard';

afterEach(cleanup);

describe('Calendar Card', () => {
  const clear = jest.fn();
  const toggle = jest.fn();
  const select = jest.fn();

  it('renders the Calendar Card component', async () => {
    const { findByText } = render(
    <CalendarCard
      clearDates={clear}
      toggle={toggle}
      dateSelect={select}
    />);

     expect(await findByText(/January 2021/)).toBeInTheDocument();
  });

  it('goes forward a month when right arrow is clicked', async () => {
    const { findByText, getByTestId, getByText } = render(
    <CalendarCard
      clearDates={clear}
      toggle={toggle}
      dateSelect={select}
    />);

    const month = await findByText(/February 2021/);
    const forward = getByTestId(/forward/);
    userEvent.click(forward);

    expect(getByText(/March 2021/)).toBeInTheDocument();
  });

  it('goes back a month when right arrow is clicked', async () => {
    const { findByText, getByTestId, getByText, queryByText } = render(
    <CalendarCard
      clearDates={clear}
      toggle={toggle}
      dateSelect={select}
    />);

    const month = await findByText(/February 2021/);
    const forward = getByTestId(/forward/);
    userEvent.click(forward);

    expect(queryByText(/January 2021/)).toBeNull();

    const back = getByTestId(/back/);
    userEvent.click(back);

    expect(getByText(/January 2021/)).toBeInTheDocument();
  });
});
