// Import the required modules and components from the React and ReactDOM libraries, as well as the App component
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Create a new root React element that will render the application to the specified DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component within a <React.StrictMode> element using the root element created above
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
