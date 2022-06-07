import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import classes from './app.module.css';
import Die from './components/Die';
import RollBtn from './components/RollBtn';
import Header from './components/Header';

const App = () => {
  const newDice = (length) => {
    const arrayOfDice = [];
    for (let i = 0; i < length; i++) {
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
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? { ...die } : newDice(1)[0];
      })
    );
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

  const [dice, setDice] = useState(newDice(10));

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      handleClick={() => holdDice(die.id)}
    />
  ));

  return (
    <main className={classes.main}>
      <Header />
      <section className={classes.dice}>{diceElements}</section>
      <RollBtn handleClick={rollDice} />
    </main>
  );
};

export default App;
