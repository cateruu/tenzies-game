import React from 'react';
import classes from './rollBtn.module.css';

const RollBtn = (props) => {
  return (
    <button onClick={props.handleClick} className={classes.button}>
      {props.win ? 'Play Again' : 'Roll'}
    </button>
  );
};

export default RollBtn;
