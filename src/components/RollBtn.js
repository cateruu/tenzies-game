import React from 'react';
import styles from './rollBtn.module.css';

const RollBtn = (props) => {
  return (
    <button onClick={props.handleClick} className={styles.button}>
      Roll
    </button>
  );
};

export default RollBtn;
