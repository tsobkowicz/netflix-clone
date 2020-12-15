import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Firebase from 'firebase';
import * as ROUTES from '../constants/routes';

interface ProtectedRouteProps {
  user: Firebase.User | null;
  exact?: boolean;
  path: string;
}

interface IsUserRedirectProps extends ProtectedRouteProps {
  loggedInPath: string;
}

export const IsUserRedirect: React.FC<IsUserRedirectProps> = ({
  user,
  loggedInPath,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        return null;
      }}
    />
  );
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  user,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.SIGN_IN,
                state: { from: location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
};
