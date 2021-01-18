import React from 'react';

import Button from './components/Button';
import classes from './App.module.css';

export default function App() {
  return (
    <div className={classes.container}>
      <div>Price/Night and Overall Rating Components</div>
      <div>Earliest Availability Component</div>
      <div>Check In / Checkout Component</div>
      <Button>Check Availability</Button>
    </div>
  );
}
