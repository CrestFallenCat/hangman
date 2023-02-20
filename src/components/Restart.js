import React from "react";
import restartCSS from "./restartCSS.css";

const Restart = ({ onRestart }) => {
  return <button onClick={onRestart}>Restart</button>;
};

export default Restart;
