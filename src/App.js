import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Academics from './pages/Academics';
// import facilities from './pages/facilities';
import Login from './pages/login';
import About from './pages/about';
import Info from './pages/info';
import Marks from './pages/marks';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const PrivateRoute = ({ element: Component, ...rest }) => {
    return (
      <Route {...rest} element={isAuthenticated ? <Component /> : <Navigate to="/login" />} />
    );
  };

  return (
    <>
      <Router>
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
          <Route exact path="/Home" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/marks" element={< Marks/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/info" element={<Info />} />
          {/* <PrivateRoute path="/facilities" element={<facilities />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
