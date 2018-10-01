import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import App from './components/App';
import NavigationBar from './components/NavigationBar';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <NavigationBar>
          <Greetings />
        </NavigationBar>
      )}
    />
    <Route
      path="/signup"
      render={() => (
        <NavigationBar>
          <SignupPage />
        </NavigationBar>
      )}
    />
  </Switch>
);

export default Routes;
