import './App.css';

function App() {
  const date = new Date();
  let currentTime = date.toLocaleString(); 
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to Group 7's React app which tells the current time.
        </h1>
        <p>
          This React app was made with the help of facebook's "create-react-app" and is running on google's GCP app engine.
        </p>
        <p>
          The current local time at loading is {currentTime}.
        </p>
      </header>
    </div>
  );
}

export default App;
