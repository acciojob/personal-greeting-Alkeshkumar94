import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');
 

  const handleChange = (e) => {
    setName(e.target.value);
  };


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
     <label>
        Enter your name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      {name && <h2>Hello, {name}!</h2>}
    </div>
  );
};

export default Greeting;
