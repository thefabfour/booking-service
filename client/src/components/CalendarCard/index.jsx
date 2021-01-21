import React, { useState, useEffect } from 'react';
import { FaRegKeyboard } from 'react-icons/fa';
import axios from '../../../axios';
import PropTypes from 'prop-types';

import Calendar from '../Calendar';

import classes from './CalendarCard.module.css';

export default function CalendarCard() {
  const [calendar, setCalendar] = useState([]);
  const [position, setPosition] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/bookings/30506103')
      .then((response) => {
        setCalendar(response.data.calendarMonths);
        setLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

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
          <div>Select Dates</div>
          <div>Minimum stay: 2 nights</div>
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
        />
        <Calendar
          month={calendar[position + 1].month}
          year={calendar[position + 1].year}
          days={calendar[position + 1].days}
          direction="right"
          move={forwardMonth}
        />
      </div>
      <div className={classes.space}>
        <FaRegKeyboard size={20} />
        <div>
          Clear Dates
        </div>
      </div>
    </div>
  );
}

CalendarCard.propTypes = {

};
