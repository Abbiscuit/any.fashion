import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);
