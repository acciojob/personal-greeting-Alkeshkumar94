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
     
     <p>      Enter your name:{' '}
        {name ? `Hello ${name}!` : ''}
  </p>
    </div>
  );
}

export default App;
