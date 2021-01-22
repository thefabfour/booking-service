import React, { useState } from 'react';
import moment from 'moment';

import Button from './components/Button';
import PriceReview from './components/PriceReview';
import Earliest from './components/Earliest';
import DatePicker from './components/DatePicker';
import CalendarCard from './components/CalendarCard';
import Guests from './components/Guests';

import classes from './App.module.css';

export default function App() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const toggleHandler = () => {
    setShowCalendar(!showCalendar);
  };

  const dateSelect = (day, inOrOut) => {
    if (inOrOut === 'in') {
      setCheckIn(day);
    } else if (moment(checkIn).diff(moment(day)) < 0) {
      setCheckOut(day);
    }
  };

  const clearDates = () => {
    setCheckIn(null);
    setCheckOut(null);
  };

  const CCard = showCalendar
    ? <CalendarCard clearDates={clearDates} toggle={toggleHandler} dateSelect={dateSelect} />
    : null;

  const btnText = checkIn && checkOut ? 'Reserve' : 'Check Availability';

  return (
    <div className={classes.container}>
      <div className={classes.price}>
        <PriceReview price={150} avg={4.85} total={55} />
      </div>
      <div className={classes.earliest}>
        <Earliest date="Apr 13" />
      </div>
      <div className={classes.pickers}>
        <div>
          <DatePicker
            toggle={toggleHandler}
            checkIn={checkIn}
            checkOut={checkOut}
          />
          {CCard}
        </div>
        <div>
          <Guests />
        </div>
      </div>
      <Button>{btnText}</Button>
    </div>
  );
}
