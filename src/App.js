import React from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import Die from './components/Die';
import RollBtn from './components/RollBtn';

const App = () => {
  const [dice, setDice] = useState(newDice());

  const diceElements = dice.map((die) => <Die value={die} />);

  function newDice() {
    const arrayOfDice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      arrayOfDice.push(randomNumber);
    }

    return arrayOfDice;
  }

  function rollDice() {
    setDice(newDice());
  }

  return (
    <main className={styles.main}>
      <section className={styles.dice}>{diceElements}</section>
      <RollBtn handleClick={rollDice} />
    </main>
  );
};

export default App;
