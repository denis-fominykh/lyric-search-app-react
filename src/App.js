import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import { Navbar } from './components/layout/Navbar';

export function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
