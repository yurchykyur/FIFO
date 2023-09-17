import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

import { home } from 'constants/Routes.js';

const PrivateRoute = ({ component: Component, redirectTo = { home } }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
