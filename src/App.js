import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './app.module.css';
import Die from './components/Die';
import RollBtn from './components/RollBtn';

const App = () => {
  const newDice = () => {
    const arrayOfDice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      arrayOfDice.push({
        value: randomNumber,
        isHeld: false,
        id: nanoid(),
      });
    }

    return arrayOfDice;
  };

  const rollDice = () => {
    setDice(newDice());
  };

  const holdDice = (id) => {
    setDice((prevState) =>
      prevState.map((die) => {
        if (die.id === id) {
          die.isHeld = !die.isHeld;
        }

        return die;
      })
    );
  };

  const [dice, setDice] = useState(newDice());

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      handleClick={() => holdDice(die.id)}
    />
  ));

  return (
    <main className={styles.main}>
      <section className={styles.dice}>{diceElements}</section>
      <RollBtn handleClick={rollDice} />
    </main>
  );
};

export default App;
