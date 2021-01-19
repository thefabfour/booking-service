import React from 'react';

import classes from './DatePicker.module.css';

export default function DatePicker() {
  return (
    <div className={classes.container}>
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
