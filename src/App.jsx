function App() {
  return (
    <div className="card">
      <h1>Rock Paper Scissors</h1>
      <div className="tabButtons">
        <button>Rock</button>
        <button>Paper</button>
        <button>Scissors</button>
      </div>
      <div className="display">
        <h2>Scoreboard</h2>
        <p>Round:</p>
        <p>YOU:</p>
        <p>COMPUTER:</p>
        <p>RESULT:</p>
        <p></p>
      </div>
      <button id="btnReset">Reset</button>
    </div>
  );
}

export default App;
