import "./App.css";
import HangMan from "./components/Hangman";
// this app and the div within it , contain the hangman component
function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Labrada:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <HangMan />
    </div>
  );
}

export default App;
