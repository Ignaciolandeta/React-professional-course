//INDEX.HTML
<div id="root"></div>

//INDEX.JS
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

//Events;

const Greet = () => {
  const [name_, setName_] = useState('');
  return (
    <div>
      {/* SyntheticEvent */}
      <input type="text" onChange={(ev) => setName_(ev.target.value)} />
      <p>Hello {name_}!</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {' '}
      <Greet />{' '}
    </div>
  );
};

render(<App />, document.getElementById('root'));
