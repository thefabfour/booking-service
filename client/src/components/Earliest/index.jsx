import React from 'react';
import PropTypes from 'prop-types';
import { FaCalendarAlt } from 'react-icons/fa';

import classes from './Earliest.module.css';

export default function Earliest({ date }) {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <FaCalendarAlt />
      </div>
      <div className={classes.avail}>
        <span>{`Earliest Availability is ${date}. `}</span>
        <span className={classes.checkDate}>Add check-in date</span>
      </div>
    </div>
  );
}

Earliest.propTypes = {
  date: PropTypes.string.isRequired,
};
