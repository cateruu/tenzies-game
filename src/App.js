import React from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import Die from './components/Die';

const App = () => {
  const [dices, setDices] = useState(newDice());

  function newDice() {
    const arrayOfDice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      arrayOfDice.push(randomNumber);
    }

    return arrayOfDice;
  }

  const diceElements = dices.map((die) => <Die value={die} />);

  return (
    <main className={styles.main}>
      <section className={styles.dice}>{diceElements}</section>
    </main>
  );
};

export default App;
