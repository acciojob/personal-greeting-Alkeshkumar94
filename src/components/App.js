// src/App.js
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const handleInputChange = (e) => {
    setName(e.target.value);
  };


  return (
    <div className="App">
      <p>Enter your name:</p>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
      />
      {name && <p>Hello {name}!</p>}
    </div>
  );
}

export default App;
