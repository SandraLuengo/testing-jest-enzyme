import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Project, IntroText, Menu } from './components';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Project color="red" />
        </Route>
        <Route exact path="/docs">
          <IntroText />
        </Route>
      </Switch>
    </Router>

  </div>
);

export default App;
