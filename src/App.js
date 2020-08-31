import React, { useContext, useState } from 'react';
import './App.scss';
//context
import { ScreenContext } from './context';
// components
import Header from './components/Header';
// router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  // context things
  const [currentScreen, setCurrentScreen] = useState('Home')


  return (
    <Router>
      <ScreenContext.Provider value={{currentScreen, setCurrentScreen}}>
        <div className="App">
          <Header/>
        </div>
        <Switch>
          <Route path="/">
            <p style={{color: 'white'}}>home</p>
          </Route>
          <Route path="/gallery">
            <p style={{color: 'white'}}>gallery</p>
          </Route>
          <Route path="/music">
            <p style={{color: 'white'}}>music</p>
          </Route>
          <Route path="/contact">
            <p style={{color: 'white'}}>contact</p>
          </Route>
        </Switch>
      </ScreenContext.Provider>
    </Router>
  );
}

export default App;
