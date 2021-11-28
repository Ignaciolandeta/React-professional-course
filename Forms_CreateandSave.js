//INDEX.HTML
<div id="root"></div>


//INDEX.JS
import React, { useEffect, useState, useRef } from 'react';
import { render } from 'react-dom';

//Forms on React (create and send);

const Form = ({ showed }) => {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');

  const firstInput = useRef();

  useEffect(
    () => {
      //Actualizar DOM;
      if (showed) {
        console.log(firstInput);
        firstInput.current.focus();
      }
    },
    { showed }
  );

  const sendForm = (ev) => {
    ev.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <form onSubmit={(ev) => sendForm(ev)}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={(ev) => setTitle(ev.target.value)}
          ref={firstInput}
        />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          onChange={(ev) => setBody(ev.target.value)}
        ></textarea>
      </div>
      <input type="submit" value="Send form" />
    </form>
  );
};

const Accordion = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show From</button>
      {show && <Form showed={show} />}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Accordion />
    </div>
  );
};

render(<App />, document.getElementById('root'));
