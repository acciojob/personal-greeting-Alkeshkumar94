import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');
 

  const handleChange = (e) => {
    setName(e.target.value);
  };


  return (
    <div>
        <p>Enter your name:</p>
        <input type="text" value={name} onChange={handleChange} />
      {name && <h2>Hello {name}!</h2>}
  );
};

export default Greeting;
