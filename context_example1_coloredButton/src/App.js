import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './Button';


const themes = {
  'dark':{
    backgroundColor: 'black',
    color: 'white'
  },
  'light':{
    backgroundColor: 'white',
    color: 'black'
  }
}

export const ThemeContext = React.createContext();


function App() {
  const [theme, setTheme] = useState(themes.dark);
  return (
    <div>
      <ThemeContext.Provider value={ themes }>
        <Button />
        <button onClick= {()=> setTheme(themes.light)}>Light Mode</button>
        <button onClick={()=> setTheme(themes.dark)}>Dark Mode</button>
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
