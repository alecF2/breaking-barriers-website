import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ContactUs from './pages/ContactUs/contactUs';
import CurrentProjects from './pages/CurrentProjects/currentProjects';
import LandingPage from './pages/LandingPage/landingPage';
import OurTeam from './pages/OurTeam/ourTeam';

import Aos from 'aos';

function App() {

  useEffect( () => {
      Aos.init( { duration: 1200 } );
    } );

  return (
      <Router>
        <div className="App">
            <Switch>
                <Route path="/contactUs">
                  <ContactUs />
                </Route>
                <Route path="/currentProjects">
                  <CurrentProjects />
                </Route>
                <Route path="/team">
                  <OurTeam />
                </Route>
                <Route path="/">
                  <LandingPage />
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
