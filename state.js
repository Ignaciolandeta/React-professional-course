#INDEX.HTML
<div id="root"></div>



#INDEX.JS
import React, { useState } from 'react';
import { render } from 'react-dom';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>click me button Pressed times= {counter}</p>
      <button onClick={() => setCounter(counter + 1)}> Click Me!</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
