/* This is the main hangman component, it contains the other components Help and Restart and
uses them to be rendered on the screen as buttons the user can interact with.
this code will keep track of the guesses a user has made, yet the user know if they are correct or not
and when they have wont the game.
 */

import React, { useState } from "react";
import Help from "./Help";
import Restart from "./Restart";

// one of these words gets chosen at random to be used as the word for the user to guess
// for the hangman game
const words = ["egg", "bacon", "computer", "turnip", "fridge", "earth"];

const Hangman = () => {
  // Use state hooks to keep track of the word, guesses, and incorrect guesses
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)].toUpperCase()
  );
  const [guesses, setGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  // Use state hook to keep track of whether to show the rules or not
  const [showRules, setShowRules] = useState(false);

  // Event handler for a guess
  const handleGuess = (event) => {
    const guess = event.target.value.toUpperCase();
    // Add the guess to the list of guesses
    setGuesses([...guesses, guess]);
  };

  // Check whether the last guess is correct or not
  const checkGuess = () => {
    const lastGuess = guesses[guesses.length - 1];
    if (word.includes(lastGuess)) {
      // If the guess is correct, update the hidden word with the guessed letter
      const hiddenWord = word
        .split("")
        .map((letter) => (guesses.includes(letter) ? letter : "_"))
        .join(" ");
      if (!hiddenWord.includes("_")) {
        // If the word is fully revealed, show an alert and restart the game
        alert("You win, have a cookie!");
        handleRestart();
      } else {
        alert("You guessed correctly!");
      }
    } else {
      // If the guess is incorrect, update the number of incorrect guesses
      setIncorrectGuesses(incorrectGuesses + 1);
      if (incorrectGuesses >= 6) {
        // If the number of incorrect guesses reaches 6, show an alert and restart the game
        alert(`You lost! The word was ${word}.`);
        handleRestart();
      } else {
        alert("Incorrect guess, try again.");
      }
    }
  };

  // Event handler for restarting the game
  const handleRestart = () => {
    // Choose a new random word and reset the guesses and incorrect guesses
    setWord(words[Math.floor(Math.random() * words.length)].toUpperCase());
    setGuesses([]);
    setIncorrectGuesses(0);
  };

  // Event handler for showing/hiding the rules
  const handleShowRules = () => {
    setShowRules(!showRules);
  };

  // Update the hidden word with the correctly guessed letters
  const hiddenWord = word
    .split("")
    .map((letter) => (guesses.includes(letter) ? letter : "_"))
    .join(" ");

  // Render the game UI
  return (
    <div>
      <h1>Hangman</h1>
      <div>
        <p>Guess the word:</p>
        <p>{hiddenWord}</p>
        <p>Incorrect guesses: {incorrectGuesses}</p>
        <p>Guess a letter:</p>
        <div style={{ display: "inline-flex" }}>
          <input type="text" maxLength="1" onChange={handleGuess} />
          <button onClick={checkGuess}>Submit</button>
          <Restart onRestart={handleRestart} />
        </div>
        <Help onShowRules={handleShowRules} showRules={showRules} />
      </div>
    </div>
  );
};

export default Hangman;
