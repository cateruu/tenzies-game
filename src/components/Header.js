import React from 'react';
import classes from './header.module.css';

const Header = () => {
  return (
    <section className={classes.header}>
      <h1 className={classes.title}>Tenzies</h1>
      <p className={classes.text}>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
    </section>
  );
};

export default Header;
