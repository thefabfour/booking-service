import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import classes from './Calendar.module.css';

export default function Calendar({ month, year, firstDay }) {
  const calHeader = moment.weekdaysShort().map((day) => (
    <div key={day} className={classes.dayHeader}>
      {day}
    </div>
  ));

  return (
    <div>
      <div>{`${month} ${year}`}</div>
      <div className={classes.dayList}>{calHeader}</div>
    </div>
  );
}

Calendar.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  firstDay: PropTypes.number.isRequired,
};
