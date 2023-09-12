import Layout from 'layout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
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
import FreedomFinance from 'pages/FreedomFinance';
import InteractiveBrokers from 'pages/InteractiveBrokers';
import Sell from 'pages/Sell';
import Buy from 'pages/Buy';
import GenerateReport from 'pages/GenerateReport';
import UsefullMaterial from 'pages/UsefullMaterial';
import Normative from 'pages/Normative';

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
