import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Signin, Signup, Browse } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

const App: React.FC = () => {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
};

export default App;
