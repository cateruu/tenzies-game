import React from 'react';
import styles from './app.module.css';
import Die from './components/Die';

const App = () => {
  return (
    <main className={styles.main}>
      <section className={styles.dies}>
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
      </section>
    </main>
  );
};

export default App;
