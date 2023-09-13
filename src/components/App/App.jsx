import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
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

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const FreedomFinance = lazy(() => import('pages/FreedomFinance'));
const InteractiveBrokers = lazy(() => import('pages/InteractiveBrokers'));
const Sell = lazy(() => import('pages/Sell'));
const Buy = lazy(() => import('pages/Buy'));
const GenerateReport = lazy(() => import('pages/GenerateReport'));
const UsefullMaterial = lazy(() => import('pages/UsefullMaterial'));
const Normative = lazy(() => import('pages/Normative'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={login} element={<Login />} />
          <Route path={register} element={<Register />} />

          <Route path={dashboard} element={<h3>Dashboard</h3>} />

          <Route path={freedomFinance} element={<FreedomFinance />} />
          <Route path={interactiveBrokers} element={<InteractiveBrokers />} />
          <Route path={buy} element={<Buy />} />
          <Route path={sell} element={<Sell />} />

          <Route path={generateReport} element={<GenerateReport />} />
          <Route path={usefullMaterial} element={<UsefullMaterial />} />
          <Route path={normative} element={<Normative />} />

          <Route path="*" element={<h3>NotFound </h3>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
