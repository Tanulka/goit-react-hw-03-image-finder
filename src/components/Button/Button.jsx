import React from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button className={s.btn} onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
