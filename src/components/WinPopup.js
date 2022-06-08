import React from 'react';
import classes from './winPopup.module.css';

const WinPopup = (props) => {
  return (
    <div className={`${classes.win} ${props.win ? classes.show : ''}`}>
      You won!
    </div>
  );
};

export default WinPopup;
