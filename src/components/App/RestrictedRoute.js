import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

import { home } from 'constants/Routes.js';

const RestrictedRoute = ({ component: Component, redirectTo = { home } }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
