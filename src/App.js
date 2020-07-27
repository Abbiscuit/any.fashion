import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import TermsAndPolicy from './pages/TermsAndPolicy';
import { auth } from './firebase/init';
import Signin from './pages/Signin';

const App = () => {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        setCurrentUser(userAuth);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribeFromAuth;
  }, []);

  const params = { currentUser };

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} {...params} />}
        />

        <Route
          exact
          path="/auth"
          render={props =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <Auth currentUser={currentUser} />
            )
          }
        />

        <Route
          exact
          path="/signin"
          render={props =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <Signin currentUser={currentUser} />
            )
          }
        />
        <Route exact path="/terms" render={props => <TermsAndPolicy />} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

const NotFound = () => <h2>Not Found ...</h2>;

export default App;
