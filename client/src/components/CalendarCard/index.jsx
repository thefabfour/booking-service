import React, { useState } from 'react';
import { FaRegKeyboard } from 'react-icons/fa';
import moment from 'moment';
import PropTypes from 'prop-types';

import Calendar from '../Calendar';

import classes from './CalendarCard.module.css';

export default function CalendarCard() {
  const [dateObj, setDateObj] = useState(moment());
  const [nextMonth, setNextMonth] = useState(moment().add(1, 'M'));

  console.log(dateObj.format());

  const firstDayOfMonth = (monthObj) => {
    const firstDay = moment(monthObj).startOf('month').format('d');
    return firstDay;
  };

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
          month={dateObj.format('MMMM')}
          year={dateObj.year()}
          firstDay={+firstDayOfMonth(dateObj)}
        />
        <Calendar
          month={nextMonth.format('MMMM')}
          year={nextMonth.year()}
          firstDay={+firstDayOfMonth(nextMonth)}
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
