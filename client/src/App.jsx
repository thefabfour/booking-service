import React, { Suspense, useState, useEffect } from 'react';
import moment from 'moment';
import axios from '../axios';

import Button from './components/Button';
import PriceReview from './components/PriceReview';
import Earliest from './components/Earliest';
import DatePicker from './components/DatePicker';
import Guests from './components/Guests';

import classes from './App.module.css';

const CalendarCard = React.lazy(() => import('./components/CalendarCard'));
const PriceSummary = React.lazy(() => import('./components/PriceSummary'));

export default function App() {
  const [status, setStatus] = useState('loading');
  const [errMessage, setErrMessage] = useState('');
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
    axios.get('/')
      .then((response) => {
        setHome(response.data);
        setStatus('success');
      })
      .catch((err) => {
        setStatus('error');
        setErrMessage(err.response.data.message);
      });
  }, []);

  const toggleHandler = () => {
    setShowCalendar(!showCalendar);
  };

  const dateSelect = (day, inOrOut) => {
    if (inOrOut === 'in') {
      setCheckIn(day);
    } else if (moment(checkIn, 'MM-DD-YYYY').diff(moment(day, 'MM-DD-YYYY')) < 0) {
      setCheckOut(day);
    }
  };

  const clearDates = () => {
    setCheckIn(null);
    setCheckOut(null);
  };

  const CCard = showCalendar ? (
    <Suspense fallback={null}>
      <CalendarCard
        clearDates={clearDates}
        toggle={toggleHandler}
        dateSelect={dateSelect}
        checkIn={checkIn}
        checkOut={checkOut}
      />
    </Suspense>
  ) : null;

  const btnText = checkIn && checkOut ? 'Reserve' : 'Check Availability';

  const priceSum = checkIn && checkOut ? (
    <div className={classes.summary}>
      <Suspense fallback={null}>
        <PriceSummary
          price={home.price}
          nights={moment(checkOut, 'MM-DD-YYYY').diff(moment(checkIn, 'MM-DD-YYYY'), 'days')}
          cleaning={home.cleaning}
        />
      </Suspense>
    </div>
  ) : null;

  if (status === 'loading') return null;
  if (status === 'error') return <div>{errMessage}</div>;

  return (
    <div className={classes.container}>
      {showCalendar ? <div className={classes.background} onClick={toggleHandler} aria-hidden="true" /> : null}
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
            card={false}
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
