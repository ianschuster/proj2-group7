import React, { useState } from 'react';
import './App.css';

function App() {
  const date = new Date();
  const [currentCount, setCurrentCount] = useState(0);
  let currentTime = date.toLocaleString(); 
  

  let counter = () => {
    setCurrentCount(currentCount + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to Group 7's React app which tells the current time and has a button with a counter.
        </h1>
        <p>
          This React app was made with the help of facebook's "create-react-app" and is running on google's GCP app engine.
        </p>
        <p>
          The current local time at render is {currentTime}.
        </p>
        <span>
        <button onClick={counter} style={{ marginRight: 10 }}>
          Click me to raise the count!
        </button>
          Current count is: {currentCount}
        </span>
      </header>
    </div>
  );
}

export default App;
