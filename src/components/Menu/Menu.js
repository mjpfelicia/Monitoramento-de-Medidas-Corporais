// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MonitoramentoMedidasCorporais from './components/MonitoramentoMedidasCorporais/MonitoramentoMedidasCorporais';
import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Register from './components/Registro/Registro';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [location]);

  return (
    <div className="App">
      {showMenu && <Menu />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MonitoramentoMedidasCorporais />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
