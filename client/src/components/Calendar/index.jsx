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
    dateSelect,
  } = props;

  const calHeader = moment.weekdaysMin().map((day) => (
    <div key={day} className={classes.dayHeader}>
      {day}
    </div>
  ));

  const calendarMonth = days.map((day, idx) => {
    let key = idx;
    let dayNumber = null;
    let dayClasses = classes.day;
    let select = null;

    if (day) {
      key = `${day.day} ${idx}`;
      dayNumber = day.day;

      if (day.avail) {
        const date = moment(`${year}, ${month}, ${day.day}`).format('M/D/YYYY');
        select = () => dateSelect(date);
      } else {
        dayClasses = `${classes.day} ${classes.booked}`;
      }
    }

    return (
      <div
        key={key}
        className={dayClasses}
        onClick={select}
        aria-hidden="true"
      >
        {dayNumber}
      </div>
    );
  });

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
        {calendarMonth}
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
  dateSelect: PropTypes.func.isRequired,
};
