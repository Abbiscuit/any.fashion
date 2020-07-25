import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import TermsAndPolicy from './pages/TermsAndPolicy';

const App = () => {
  const currentUser = true;

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={props => {
            return currentUser ? <Home /> : <Auth />;
          }}
        />

        <Route exact path="/login" render={props => <Auth />} />
        <Route exact path="/terms" render={props => <TermsAndPolicy />} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

const NotFound = () => <h2>Not Found ...</h2>;

export default App;
