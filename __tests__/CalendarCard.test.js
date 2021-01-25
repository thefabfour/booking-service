import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, cleanup } from '@testing-library/react';
import { server } from '../mocks/server';
import { rest } from 'msw';

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

  it('goes back a month when left arrow is clicked', async () => {
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

  it('does nothing when left arrow is clicked at first month', async () => {
    const { findByText, getByTestId, getByText, queryByText } = render(
    <CalendarCard
      clearDates={clear}
      toggle={toggle}
      dateSelect={select}
    />);

    const month = await findByText(/January 2021/);

    const back = getByTestId(/back/);
    userEvent.click(back);

    expect(getByText(/February 2021/)).toBeInTheDocument();
  });

  it('does nothing right arrow is clicked at last month', async () => {
    const { findByText, getByTestId, getByText, queryByText } = render(
    <CalendarCard
      clearDates={clear}
      toggle={toggle}
      dateSelect={select}
    />);

    const month = await findByText(/January 2021/);

    const forward = getByTestId(/forward/);

    for (let i = 1; i <= 25; i++) {
      userEvent.click(forward);
    }

    expect(getByText(/December 2022/)).toBeInTheDocument();
  });

  it('shows server error if request fails', async () => {
    const testErrorMessage = 'THIS IS A TEST FAILURE';
    server.use(
      rest.get('http://localhost:3000/api/bookings/30506103', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: testErrorMessage }))
      })
    );

    const { findByText } = render(
      <CalendarCard
        clearDates={clear}
        toggle={toggle}
        dateSelect={select}
      />);

    expect(await findByText(/THIS IS A TEST FAILURE/)).toBeInTheDocument();
  })
});
