import React from 'react';
import { useState } from 'react';

const App = () => {

  const [clickedTotal, setClickedTotal] = useState(0);

  const onIncrement = () => {
    setClickedTotal(clickedTotal + 1);
    console.log(clickedTotal);
  };

  return (
    <div>
      <h1>Clicked</h1>
      <h2>{clickedTotal}</h2>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export default App;
