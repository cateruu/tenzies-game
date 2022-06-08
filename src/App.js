import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import classes from './app.module.css';
import Die from './components/Die';
import RollBtn from './components/RollBtn';
import Header from './components/Header';
import WinPopup from './components/WinPopup';

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
        return die.isHeld && !win ? { ...die } : newDice(1)[0];
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
  const [win, setWin] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      setWin(true);
    }
  }, [dice]);

  const checkIfWin = (score) => {
    if (score === 100) {
      setWin((prevState) => !prevState);
    }
  };

  const playAgain = () => {
    setDice(newDice(10));
    setWin((prevState) => !prevState);
  };

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
      <WinPopup win={win} />
      <Header />
      <section className={classes.dice}>{diceElements}</section>
      <RollBtn handleClick={win ? playAgain : rollDice} win={win} />
    </main>
  );
};

export default App;
