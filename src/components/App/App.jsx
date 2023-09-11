import Layout from 'layout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<h3>Dashboard</h3>} />

          <Route path="/freedom-finance" element={<h3>Freedom Finance</h3>} />
          <Route
            path="/interactive-brokers"
            element={<h3>Interactive Brokers</h3>}
          />
          <Route path="/buy" element={<h3>Buy</h3>} />
          <Route path="/sell" element={<h3>Sell</h3>} />

          <Route path="/generate-report" element={<h3>Generate a report</h3>} />
          <Route path="/usefull-material" element={<h3>Usefull material</h3>} />
          <Route path="/normative" element={<h3>Normative</h3>} />

          <Route path="*" element={<h3>NotFound </h3>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
