// this component is where the logic for the guess is stored

import React from "react";

const Guess = ({ onGuess, checkGuess }) => {
  // This function is called whenever the user types in the input field
  const handleChange = (event) => {
    // Get the value of the input, convert it to uppercase and call the onGuess callback with the guessed letter
    const guess = event.target.value.toUpperCase();
    onGuess(guess);
  };

  return (
    // Render a div element containing an input field and a submit button
    <div>
      <p>Guess a letter:</p>
      {/* An input field for the user to type in their letter guess */}
      <input type="text" maxLength="1" onChange={handleChange} />
      {/* A submit button to check the user's guess */}
      <button onClick={checkGuess}>Submit</button>
    </div>
  );
};

export default Guess;
