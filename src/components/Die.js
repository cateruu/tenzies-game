import React from 'react';
import styles from './die.module.css';

const Die = (props) => {
  return <div className={styles.die}>{props.value}</div>;
};

export default Die;
