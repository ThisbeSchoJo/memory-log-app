import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import MemoryLog from './MemoryLog';
import NewMemoryForm from './NewMemoryForm';


function App() {
  //State to store the list of memories
  const [memories, setMemories] = useState([])

  //Fetch memories from db.json when component mounts
  useEffect(() => {
    fetch("http://localhost:3000/memories")
    .then(response => {
      if (response.ok) {
        response.json().then(memoriesData => setMemories(memoriesData))
      }
      else {
        alert("Error: Unable to retrieve memories data.")
      }
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          welcome to your memory
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
