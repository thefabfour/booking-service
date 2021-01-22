import React from 'react';
import PropTypes from 'prop-types';

import classes from './DatePicker.module.css';

export default function DatePicker(props) {
  const {
    toggle,
    checkIn,
    checkOut,
    card,
  } = props;

  const containerClasses = card ? `${classes.container} ${classes.insideCard}` : classes.container;
  return (
    <div className={containerClasses} onClick={toggle} aria-hidden="true">
      <div className={classes.pickerL}>
        <div className={classes.title}>CHECK-IN</div>
        <div className={classes.date}>{checkIn || 'Add Date'}</div>
      </div>
      <div className={classes.picker}>
        <div className={classes.title}>CHECKOUT</div>
        <div className={classes.date}>{checkOut || 'Add Date'}</div>
      </div>
    </div>
  );
}

DatePicker.propTypes = {
  toggle: PropTypes.func.isRequired,
  checkIn: PropTypes.string,
  checkOut: PropTypes.string,
  card: PropTypes.bool.isRequired,
};

DatePicker.defaultProps = {
  checkIn: null,
  checkOut: null,
};
