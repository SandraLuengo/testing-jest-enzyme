import React from 'react';
import { Test, IntroText } from './components';
import './App.css';

const App = () => (
  <div className="App">
    <IntroText />
    <Test color="red" />
  </div>
);

export default App;
