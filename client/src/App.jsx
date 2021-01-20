import React, { useState } from 'react';

import Button from './components/Button';
import PriceReview from './components/PriceReview';
import Earliest from './components/Earliest';
import DatePicker from './components/DatePicker';
import CalendarCard from './components/CalendarCard';
import Guests from './components/Guests';

import classes from './App.module.css';

export default function App() {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleHandler = () => {
    setShowCalendar(!showCalendar);
  };

  const CCard = showCalendar ? <CalendarCard /> : null;
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
          <DatePicker toggle={toggleHandler} />
          {CCard}
        </div>
        <div>
          <Guests />
        </div>
      </div>
      <Button>Check Availability</Button>
    </div>
  );
}
