import React from 'react';
import classes from './die.module.css';

const Die = (props) => {
  return (
    <div
      className={`${classes.die} ${props.isHeld ? classes.held : ''}`}
      onClick={props.handleClick}
    >
      {props.value}
    </div>
  );
};

export default Die;
