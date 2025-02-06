import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import MemoryList from './MemoryList';
import NewMemoryForm from './NewMemoryForm';


function App() {

  const [memories, setMemories] = useState([])

  //Fetch memories from db.json when component mounts
  useEffect(() => {
    fetch('http://localhost:3000/memories')
    .then(response => response.json()) 
    .then(memoriesData => setMemories(memoriesData))
  }, [])

  //Adds a new memory to state
  function addMemory(newMemory) {
    setMemories([...memories, newMemory])
  }


  return (
    <main>
        <NewMemoryForm addMemory={addMemory} />
        {/* <Search updateSearchText={updateSearchText} searchText={searchText}/> */}
        <MemoryList memories={memories} />
    </main>
  );
}

export default App;
