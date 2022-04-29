import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('Heber');

  const handleNameInput = (e : any) => {
    setName(e.target.value);
  };

  const alertName = () => {
    alert(name);
  };

  return (
    <div className="App">
      <h3>This is a Functional Component</h3>
      <input type="text" onChange={handleNameInput} value={name}/>
      <button onClick={alertName}>Alert</button>
      <span>{name}</span>
    </div>
  );
}

export default App;