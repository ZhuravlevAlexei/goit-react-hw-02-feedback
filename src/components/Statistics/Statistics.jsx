import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={css.statInfo}>Good: {good}</p>
      <p className={css.statInfo}>Neutral: {neutral}</p>
      <p className={css.statInfo}>Bad: {bad}</p>
      <p className={css.statInfo}>Total: {total}</p>
      <p className={css.statInfo}>Positive feedback: {positivePercentage} %</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
