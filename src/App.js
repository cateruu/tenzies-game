import React from 'react';
import styles from './app.module.css';
import Die from './components/Die';

const App = () => {
  const newDice = () => {
    const arrayOfDice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      arrayOfDice.push(randomNumber);
    }

    return arrayOfDice;
  };

  console.log(newDice());

  return (
    <main className={styles.main}>
      <section className={styles.dice}>
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
