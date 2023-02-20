import React from "react";
import helpCSS from "./helpCSS.css";

const Help = ({ showRules, onShowRules }) => {
  // `showRules` and `onShowRules` are props passed from the parent component
  // `showRules` is a boolean that determines whether or not to show the rules of the game
  // `onShowRules` is a function that will be called when the "Help" button is clicked

  return (
    <div>
      <button className="help" onClick={onShowRules}>
        Help
      </button>
      {/* If `showRules` is true, display the rules of the game */}
      {showRules && (
        <div>
          <h2>Rules of Hangman</h2>
          <p>1. The computer chooses a word at random.</p>
          <p>2. The player tries to guess the word by suggesting letters.</p>
          <p>
            3. If the letter is in the word, it is revealed. If not, the player
            gets an incorrect guess.
          </p>
          <p>
            4. The game ends when the player correctly guesses the word or gets
            six incorrect guesses.
          </p>
        </div>
      )}
    </div>
  );
};

export default Help;
