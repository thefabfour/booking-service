import React from 'react';
import PropTypes from 'prop-types';

import classes from './PriceReview.module.css';

export default function PriceReview({ price, avg, total }) {
  return (
    <div className={classes.container}>
      <div>
        <span className={classes.price}>{`$${price} `}</span>
        <span>/ night</span>
      </div>
      <div>
        <span className={classes.star}>&#9733; </span>
        <span className={classes.avg}>{avg}</span>
        <span className={classes.total}>{` (${total})`}</span>
      </div>
    </div>
  );
}

PriceReview.propTypes = {
  price: PropTypes.number.isRequired,
  avg: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
