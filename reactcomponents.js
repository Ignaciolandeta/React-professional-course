//INDEX.HTML
<h1>React testing</h1>
<div id="react-app"></div>


//INDEX.JS
import React from 'react';
import { render } from 'react-dom';

function App() {
  return <h1>Hello world!</h1>;
}

render(<App />, document.getElementById('react-app'));
