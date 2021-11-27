#INDEX.HTML
<h1>React testing</h1>
<div id="react-app"></div>


#INDEX.JS
import React from 'react';
import { render } from 'react-dom';

const names = ['Ignacio', 'John', 'Mike', 'Den'];

// props and default props '({ })';
const Greeting = ({ name_, language = 'en' }) => {
  const greet = language === 'en' ? 'Hello ' : 'Hola ';
  return (
    <p>
      {greet}
      {name_}
    </p>
  );
};

// default Props old alternative ES5;
//Greeting.defaultProps = {
//  language: 'es',
// };

const App = () => {
  return (
    <div>
      <Greeting name_="Ignacio" language="" />
    </div>
  );
};

render(<App />, document.getElementById('react-app'));
