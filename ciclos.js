#INDEX.HTML
<h1>React testing</h1>
<div id="rootapp"></div>


#INDEX.JS
import React from 'react';
import { render } from 'react-dom';

const names1 = ['Ignacio', 'John', 'Den', 'Chris'];

function getNames2() {
  const elementsArray = [];
  for (var i = 0; i < names1.length; i++) {
    elementsArray.push(<li>{names1[i]}</li>);
  }
  console.log(elementsArray);
  return elementsArray;
}

const Names2 = () => {
  return <ul> {getNames2()} </ul>;
};

const App = () => {
  return (
    <div>
      <Names2 />{' '}
    </div>
  );
};

render(<App />, document.getElementById('rootapp'));
