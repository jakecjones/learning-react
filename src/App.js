import React from 'react';
import Task from './components/task.js';
import './App.css';
import count from "./utils/count.js";

function App() {
  return (
    <div className="App">
        <Task name="Timmy"/>
        <button onClick={count.addCount()}>
          {count.current()}
        </button>
    </div>
  );

}

export default App;
