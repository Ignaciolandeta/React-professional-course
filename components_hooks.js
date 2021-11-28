//INDEX.HTML
<div id="root"></div>

//INDEX.JS
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

//App that counts button click pressed times;
const Button = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Executed');
    return () => console.log('GoodBy!');
  });

  return <button onClick={() => setCount(count + 1)}> Click Me!</button>;
};

const App = () => {
  const [showButton, setShowButton] = useState(true);
  return (
    <div>
      <button onClick={() => setShowButton(false)}>Delete Button</button>
      <div>{showButton && <Button />}</div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
