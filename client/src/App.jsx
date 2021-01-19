import React from 'react';

import Button from './components/Button';
import PriceReview from './components/PriceReview';
import Earliest from './components/Earliest';

import classes from './App.module.css';

export default function App() {
  return (
    <div className={classes.container}>
      <div className={classes.price}>
        <PriceReview price={150} avg={4.85} total={55} />
      </div>
      <div className={classes.earliest}>
        <Earliest date="Apr 13" />
      </div>
      <div>Check In / Checkout Component</div>
      <Button>Check Availability</Button>
    </div>
  );
}
