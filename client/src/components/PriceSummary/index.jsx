import React from 'react';
import PropTypes from 'prop-types';

import classes from './PriceSummary.module.css';

export default function PriceSummary(props) {
  const {
    price,
    cleaning,
    nights,
  } = props;

  const sum = price * nights;
  const cleanFee = cleaning * nights;
  const serviceFee = Math.round(sum * 0.12);
  const taxSum = Math.round(sum * 0.09);
  const total = sum + cleanFee + serviceFee + taxSum;

  return (
    <div className={classes.container}>
      <span className={classes.noCharge}>You won&apos;t be charged yet</span>
      <div className={classes.item}>
        <div>{`$${price} x ${nights} night${nights > 1 ? 's' : ''}`}</div>
        <div>{`$${sum}`}</div>
      </div>
      <div className={classes.item}>
        <div>Cleaning Fee</div>
        <div>{`$${cleanFee}`}</div>
      </div>
      <div className={classes.item}>
        <div>Service Fee</div>
        <div>{`$${serviceFee}`}</div>
      </div>
      <div className={classes.lastItem}>
        <div>Occupancy taxes and fees</div>
        <div>{`$${taxSum}`}</div>
      </div>
      <div className={classes.total}>
        <div>Total</div>
        <div>{`$${total}`}</div>
      </div>
    </div>
  );
}

PriceSummary.propTypes = {
  price: PropTypes.number.isRequired,
  cleaning: PropTypes.number.isRequired,
  nights: PropTypes.number.isRequired,
};
