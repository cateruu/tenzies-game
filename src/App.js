import React from 'react';
import styles from './app.module.css';
import Die from './components/Die';

const App = () => {
  return (
    <main className={styles.main}>
      <section className={styles.dies}>
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
      </section>
    </main>
  );
};

export default App;
