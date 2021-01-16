import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

export default function Button({ children }) {
  return (
    <button type="button" className={classes.btn}>
      <span className={classes.text}>
        {children}
      </span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
