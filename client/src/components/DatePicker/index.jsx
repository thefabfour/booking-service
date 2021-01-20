import React from 'react';
import PropTypes from 'prop-types';

import classes from './DatePicker.module.css';

export default function DatePicker({ toggle }) {
  return (
    <div className={classes.container} onClick={toggle} aria-hidden="true">
      <div className={classes.pickerL}>
        <div className={classes.title}>CHECK-IN</div>
        <div className={classes.date}>Add Date</div>
      </div>
      <div className={classes.picker}>
        <div className={classes.title}>CHECKOUT</div>
        <div className={classes.date}>Add Date</div>
      </div>
    </div>
  );
}

DatePicker.propTypes = {
  toggle: PropTypes.func.isRequired,
};
