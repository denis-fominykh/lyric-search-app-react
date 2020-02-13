import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import { Navbar } from './components/layout/Navbar';
import { Index } from './components/layout/Index';

export function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}
