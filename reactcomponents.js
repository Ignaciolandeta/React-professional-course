#INDEX.HTML
<h1>React testing</h1>
<div id="react-app"></div>


#INDEX.JS
import React, { Component } from 'react';
import { render } from 'react-dom';

// metodo componente Fucional;
// const App = () => <h1>Hello world!</h1>;

// metodo componente Render ('class');
class App extends Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

render(<App />, document.getElementById('react-app'));
