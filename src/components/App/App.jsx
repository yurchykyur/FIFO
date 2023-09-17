import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import {
  login,
  home,
  register,
  dashboard,
  freedomFinance,
  interactiveBrokers,
  buy,
  sell,
  generateReport,
  usefullMaterial,
  normative,
} from 'constants/Routes';
import Layout from 'layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const FreedomFinance = lazy(() => import('pages/FreedomFinance'));
const InteractiveBrokers = lazy(() => import('pages/InteractiveBrokers'));
const Sell = lazy(() => import('pages/Sell'));
const Buy = lazy(() => import('pages/Buy'));
const GenerateReport = lazy(() => import('pages/GenerateReport'));
const UsefullMaterial = lazy(() => import('pages/UsefullMaterial'));
const Normative = lazy(() => import('pages/Normative'));

const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div>
        <Routes>
          <Route path={home} element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path={login}
              element={
                <RestrictedRoute component={Login} redirectTo={dashboard} />
              }
            />
            <Route
              path={register}
              element={
                <RestrictedRoute component={Register} redirectTo={dashboard} />
              }
            />

            <Route
              path={dashboard}
              element={
                <PrivateRoute component={Dashboard} redirectTo={login} />
              }
            />

            <Route
              path={freedomFinance}
              element={
                <PrivateRoute component={FreedomFinance} redirectTo={login} />
              }
            />
            <Route
              path={interactiveBrokers}
              element={
                <PrivateRoute
                  component={InteractiveBrokers}
                  redirectTo={login}
                />
              }
            />

            <Route
              path={buy}
              element={<PrivateRoute component={Buy} redirectTo={login} />}
            />

            <Route
              path={sell}
              element={<PrivateRoute component={Sell} redirectTo={login} />}
            />

            <Route
              path={generateReport}
              element={
                <PrivateRoute component={GenerateReport} redirectTo={login} />
              }
            />

            <Route
              path={usefullMaterial}
              element={
                <PrivateRoute component={UsefullMaterial} redirectTo={login} />
              }
            />

            <Route
              path={normative}
              element={
                <PrivateRoute component={Normative} redirectTo={login} />
              }
            />

            <Route path="*" element={<h3>NotFound </h3>} />
          </Route>
        </Routes>
      </div>
    )
  );
};

export default App;
