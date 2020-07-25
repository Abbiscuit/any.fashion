import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Auth} />
      </Switch>
    </div>
  );
};

export default App;
