import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import classes from './Guests.module.css';

export default function Guests() {
  return (
    <div className={classes.container}>
      <div className={classes.guests}>
        <div className={classes.title}>GUESTS</div>
        <div className={classes.qty}>1 guest</div>
      </div>
      <div className={classes.icon}>
        <IoIosArrowDown size={20} />
      </div>
    </div>
  );
}
