import Layout from 'layout';
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Reistration</Link>
      <Link to="/usefull-material">Usefull material</Link>
      <Link to="/normative">Normative</Link>
      <Link to="/freedom-finance">Freedom Finance</Link>
      <Link to="/interactive-brokers">Interactive Brokers</Link>
      <Link to="/generate-report">Generate a report</Link>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h3>Home</h3>} />
          <Route path="/login" element={<h3>Login</h3>} />
          <Route path="/register" element={<h3>Registration</h3>} />
          <Route path="/usefull-material" element={<h3>Usefull material</h3>} />
          <Route path="/normative" element={<h3>Normative</h3>} />
          <Route path="/freedom-finance" element={<h3>Freedom Finance</h3>} />
          <Route
            path="/interactive-brokers"
            element={<h3>Interactive Brokers</h3>}
          />
          <Route path="/generate-report" element={<h3>Generate a report</h3>} />

          <Route path="*" element={<h3>NotFound </h3>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
