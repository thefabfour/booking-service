import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import PropTypes from 'prop-types';
import moment from 'moment';

import classes from './Calendar.module.css';

export default function Calendar(props) {
  const {
    month,
    year,
    days,
    direction,
    move,
  } = props;

  const calHeader = moment.weekdaysMin().map((day) => (
    <div key={day} className={classes.dayHeader}>
      {day}
    </div>
  ));

  return (
    <div>
      <div className={classes.titleBar}>
        <div>
          {direction === 'left' ? (
            <button type="button" className={classes.arrow} onClick={move}>
              <IoIosArrowBack size={16} />
            </button>
          ) : null}
        </div>
        <h3 className={classes.title}>{`${month} ${year}`}</h3>
        <div>
          {direction === 'right' ? (
            <button type="button" className={classes.arrow} onClick={move}>
              <IoIosArrowForward size={16} />
            </button>
          ) : null}
        </div>
      </div>
      <div className={classes.dayList}>{calHeader}</div>
      <div className={classes.calendar}>
        {days.map((day, idx) => {
          let dayClasses = classes.day;
          if (day && !day.avail) {
            dayClasses = `${classes.day} ${classes.booked}`;
          }
          return (
            <div key={day ? `${day.day} ${idx}` : idx} className={dayClasses}>{day ? day.day : null}</div>
          );
        })}
      </div>
    </div>
  );
}

Calendar.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  days: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number,
    avail: PropTypes.bool,
  })).isRequired,
  direction: PropTypes.string.isRequired,
  move: PropTypes.func.isRequired,
};
