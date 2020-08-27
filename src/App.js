import React, { useContext, useState } from 'react';
import './App.scss';
//context
import { ScreenContext } from './context';
// components
import Header from './components/Header';

function App() {

  // context things
  const [currentScreen, setCurrentScreen] = useState('Home')


  return (
    <ScreenContext.Provider value={{currentScreen, setCurrentScreen}}>
      <div className="App">
        <Header/>
      </div>
    </ScreenContext.Provider>
  );
}

export default App;
