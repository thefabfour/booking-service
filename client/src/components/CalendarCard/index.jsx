import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaRegKeyboard } from 'react-icons/fa';
import axios from '../../../axios';

import Calendar from '../Calendar';

import classes from './CalendarCard.module.css';

export default function CalendarCard({ clearDates, toggle, dateSelect }) {
  const [calendar, setCalendar] = useState([]);
  const [position, setPosition] = useState(0);
  const [inOrOut, setInOrOut] = useState('in');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/bookings/30506103')
      .then((response) => {
        setCalendar(response.data);
        setLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  const dateSelectHandler = (date) => {
    dateSelect(date, inOrOut);
    if (inOrOut === 'in') {
      setInOrOut('out');
    } else {
      setInOrOut('out');
      toggle();
    }
  };

  const clearDateHandler = () => {
    clearDates();
    setInOrOut('in');
  };

  const forwardMonth = () => {
    if (position + 2 < calendar.length) {
      setPosition((prevState) => prevState + 1);
    }
  };

  const backMonth = () => {
    if (position > 0) {
      setPosition((prevState) => prevState - 1);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <div className={classes.container}>
      <div className={classes.space}>
        <div>
          <h2>Select Dates</h2>
          <div className={classes.min}>Minimum stay: 2 nights</div>
        </div>
        <div>CHECK-IN / CHECKOUT</div>
      </div>
      <div className={classes.calendar}>
        <Calendar
          month={calendar[position].month}
          year={calendar[position].year}
          days={calendar[position].days}
          direction="left"
          move={backMonth}
          dateSelect={dateSelectHandler}
        />
        <Calendar
          month={calendar[position + 1].month}
          year={calendar[position + 1].year}
          days={calendar[position + 1].days}
          direction="right"
          move={forwardMonth}
          dateSelect={dateSelectHandler}
        />
      </div>
      <div className={classes.space}>
        <FaRegKeyboard size={20} />
        <div>
          <button type="button" className={classes.clear} onClick={clearDateHandler}>Clear Dates</button>
          <button type="button" className={classes.close} onClick={toggle}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

CalendarCard.propTypes = {
  clearDates: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  dateSelect: PropTypes.func.isRequired,
};
