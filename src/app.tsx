import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Signin, Signup, Browse } from './pages';
import * as ROUTES from './constants/routes';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
};

export default App;
