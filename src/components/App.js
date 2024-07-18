// src/App.js
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const handleInputChange = (e) => {
    setName(e.target.value);
  };


  return (
    <div className="App">
      <h1>Enter your name:</h1>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
      />
      {name&& <h2>Hello {name}!</h2>}
    </div>
  );
}

export default App;
