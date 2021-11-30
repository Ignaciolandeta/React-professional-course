import React, { useEffect, useState, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import hello from './hello';

const Surprise = React.lazy(()=>import('./Surprise'))

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  
  useEffect(()=>{
//    import('./hello').then(mod => mod.default());
  },[]);

  return (
    <div>
      <button onClick={(ev)=>setShowSurprise(true)}>Click to show Surprise</button>
      {showSurprise && <Suspense fallback={ <p>loading...</p>}> <Surprise/> </Suspense>}
    </div>
  );
}

export default App;
