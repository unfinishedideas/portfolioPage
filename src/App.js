import React, { useState } from 'react';
import './App.scss';
//context
import { ScreenContext } from './context';
// components
import Header from './components/Header';
// screens
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import Music from './screens/Music';
import Contact from './screens/Contact';
// router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  // context things
  const [currentScreen, setCurrentScreen] = useState('Home')


  return (
    <Router>
      <ScreenContext.Provider value={{currentScreen, setCurrentScreen}}>
        <div className="App">
          <Header/> 
          
          <Switch>
            <Route path="/gallery">
              <Gallery/>
            </Route>
            
            <Route path="/music">
              <Music/>
            </Route>
            
            <Route path="/contact">
              <Contact/>
            </Route>
            
            <Route path="/">
              <Home/>
            </Route>
          </Switch>

        </div>  
      </ScreenContext.Provider>
    </Router>
  );
}

export default App;
