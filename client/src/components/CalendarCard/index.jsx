import React, { useState, useEffect } from 'react';
import { FaRegKeyboard } from 'react-icons/fa';
import axios from '../../../axios';
import PropTypes from 'prop-types';

import Calendar from '../Calendar';

import classes from './CalendarCard.module.css';

export default function CalendarCard() {
  // const [dateObj, setDateObj] = useState(false);

  useEffect(() => {
    axios.get('/bookings/30506199')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

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
          month="January"
          year={2021}
          firstDay={5}
        />
        <Calendar
          month="February"
          year={2021}
          firstDay={1}
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
