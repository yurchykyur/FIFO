import Layout from 'layout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
import * as myRoute from 'constants/Routes';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={myRoute.home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={myRoute.login} element={<Login />} />
          <Route path={myRoute.register} element={<Register />} />

          <Route path={myRoute.dashboard} element={<h3>Dashboard</h3>} />

          <Route
            path={myRoute.freedomFinance}
            element={<h3>Freedom Finance</h3>}
          />
          <Route
            path={myRoute.interactiveBrokers}
            element={<h3>Interactive Brokers</h3>}
          />
          <Route path={myRoute.buy} element={<h3>Buy</h3>} />
          <Route path={myRoute.sell} element={<h3>Sell</h3>} />

          <Route
            path={myRoute.generateReport}
            element={<h3>Generate a report</h3>}
          />
          <Route
            path={myRoute.usefullMaterial}
            element={<h3>Usefull material</h3>}
          />
          <Route path={myRoute.normative} element={<h3>Normative</h3>} />

          <Route path="*" element={<h3>NotFound </h3>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
