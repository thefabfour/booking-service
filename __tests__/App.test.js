import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, cleanup } from '@testing-library/react';
import { server } from '../mocks/server';
import { rest } from 'msw';

import App from '../client/src/App'

afterEach(cleanup);

describe('App', () => {
  
  it('renders App component', async () => {
    const { findByText } = render(<App />);

    expect(await findByText(/\$150/i)).toBeInTheDocument();
  })
  
  it('opens the calendar card when "CHECK-IN" is clicked', async () => {
    const { findByText } = render(<App />);

    const addDate = await findByText(/CHECK-IN/);
    userEvent.click(addDate);
    expect(await findByText(/January 2021/)).toBeInTheDocument();
  })

  it('selects a check-in date when a day is picked on calendar', async () => {
    const { findByText, queryAllByText } = render(<App />);

    const addDate = await findByText(/CHECK-IN/);
    userEvent.click(addDate);

    const day = await findByText(/29/);
    userEvent.click(day);

    const dates = queryAllByText(/1\/29\/2021/);
    expect(dates[0]).toBeInTheDocument();
  })

  it('selects a checkout date when a second day is picked on calendar', async () => {
    const { findByText, getByText } = render(<App />);

    const addDate = await findByText(/CHECK-IN/);
    userEvent.click(addDate);

    const checkIn = await findByText(/29/);
    userEvent.click(checkIn);

    const checkOut = getByText(/30/);
    userEvent.click(checkOut);

    expect(getByText(/Total/)).toBeInTheDocument();
  })

  it('does not select a checkout date when a second day invalid', async () => {
    const { findByText, getByText, queryByText } = render(<App />);

    const addDate = await findByText(/CHECK-IN/);
    userEvent.click(addDate);

    const checkIn = await findByText(/29/);
    userEvent.click(checkIn);

    userEvent.click(checkIn);

    expect(queryByText(/Total/)).toBeNull();
  })

  it('clears the dates when "Clear Dates" is clicked', async () => {
    const { findByText, getByText, queryByText } = render(<App />);

    const addDate = await findByText(/CHECK-IN/);
    userEvent.click(addDate);

    const day = await findByText(/30/);
    userEvent.click(day);

    const clear = getByText(/Clear Dates/);
    userEvent.click(clear);

    expect(queryByText(/1\/30\/2021/)).toBeNull();
  })

  it('closes the calendar card when "Close" is clicked', async () => {
    const { findByText, queryByText } = render(<App />);

    const addDate = await findByText(/CHECK-IN/);
    userEvent.click(addDate);

    const close = await findByText(/Close/);
    userEvent.click(close);
    expect(queryByText(/Close/)).toBeNull();
  })

  it('shows server error if request fails', async () => {
    const testErrorMessage = 'THIS IS A TEST FAILURE';
    server.use(
      rest.get('http://localhost:3000/api/30506103', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: testErrorMessage }))
      })
    );

    const { findByText, debug } = render(<App />);
      
    expect(await findByText(/THIS IS A TEST FAILURE/)).toBeInTheDocument();
  })
});
