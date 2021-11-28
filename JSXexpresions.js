//INDEX.HTML
<h1>React testing</h1>
<div id="rootapp"></div>
<div id="button"></div>

//INDEX.JS
//CONDICIONES;

import React from 'react';
import { render } from 'react-dom';


function GreetingLanguage({language}){
  if(language === 'en') {
    return <span>Hello!</span>;
  } else{
    return <span>Hola!</span>;
  }

}

// definicion de un componente en React (SIEMPRE PRIMERA LETRA MAYUSCULA!);
const Greeting = ()=>{
  const name = 'User X';
  return <p> <GreetingLanguage language='en' /> { `${name} :)` } </p>;
}

  //  const language = 'es'
//  return (
//    <div>
 //     {
//        language === 'en' && //<p>Hello!</p> 
//      } 
//      {  
//        language === 'es' && //<p>Hola!</p> 
//      }
//    </div>
//  )
    


//  componenete 'Greeting' dentro de otro componente 'App';
const App = () => {
  return <h1> <Greeting /> </h1>; 
}


// const Button = ()=>{
//  return React.createElement('button',{
//    onclick: ()=> alert('Button pressed OK')
//  },'Send');
// }

// JSX sintaxis alternativa al metodo '.createElement' de React;
const Button = ()=> <button onClick={ ()=> alert("Button pressed OK")}>Send</button>

render(<App />, document.getElementById('rootapp'));

render(<Button />, document.getElementById('button'));
