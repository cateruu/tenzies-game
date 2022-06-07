import React from 'react';
import classes from './winPopup.module.css';

const WinPopup = (props) => {
  return (
    <div className={`${classes.win} ${props.win ? classes.show : ''}`}>
      You win!
    </div>
  );
};

export default WinPopup;
