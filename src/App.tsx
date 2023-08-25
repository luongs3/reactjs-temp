import React, { ReactNode } from 'react';
import './App.css'

function App({children}: {children: ReactNode}) {
  return (
    <div id="App">
      {children}
    </div>
  );
}

export default App;
