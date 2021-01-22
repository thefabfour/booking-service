import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from '../axios';

import Button from './components/Button';
import PriceReview from './components/PriceReview';
import Earliest from './components/Earliest';
import DatePicker from './components/DatePicker';
import CalendarCard from './components/CalendarCard';
import Guests from './components/Guests';
import PriceSummary from './components/PriceSummary';

import classes from './App.module.css';

export default function App() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [home, setHome] = useState({
    price: null,
    cleaning: null,
    avg: null,
    totalRev: null,
  });

  useEffect(() => {
    axios.get('/30506103')
      .then((response) => {
        setHome(response.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

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

  const priceSum = checkIn && checkOut ? (
    <div className={classes.summary}>
      <PriceSummary
        price={home.price}
        nights={moment(checkOut).diff(moment(checkIn), 'days')}
        cleaning={home.cleaning}
      />
    </div>
  ) : null;

  return (
    <div className={classes.container}>
      <div className={classes.price}>
        <PriceReview price={home.price} avg={home.avg} total={home.totalRev} />
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
      {priceSum}
    </div>
  );
}
