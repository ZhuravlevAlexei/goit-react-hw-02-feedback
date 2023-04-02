import React from 'react';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={css.statInfo}>{message}</p>;
};

export default Notification;
