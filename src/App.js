import React, { useContext, useState } from 'react';
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

          <Link to={'/home'}>home</Link>
          <Link to={'/gallery'}>gallery</Link>
          <Link to={'/projects'}>projects</Link>
          <Link to={'/contact'}>contact</Link>

        </div>  
      </ScreenContext.Provider>
    </Router>
  );
}

export default App;
