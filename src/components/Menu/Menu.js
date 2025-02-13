import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartBar, FaBullseye, FaWpforms, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import './Menu.css';

const Menu = ({ isAuthenticated, userName, handleLogout }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="menu-nav">
      <ul>
        <li>
          <NavLink to="/grafico" className={({ isActive }) => isActive ? 'active' : undefined}>
            <FaChartBar /> Gráfico
          </NavLink>
        </li>
        <li>
          <NavLink to="/objetivos" className={({ isActive }) => isActive ? 'active' : undefined}>
            <FaBullseye /> Objetivos
          </NavLink>
        </li>
        <li>
          <NavLink to="/formulario" className={({ isActive }) => isActive ? 'active' : undefined}>
            <FaWpforms /> Formulário
          </NavLink>
        </li>
        {!isAuthenticated && (
          <li>
            <button onClick={handleLoginClick} className="login-button">
              <FaSignInAlt /> Login
            </button>
          </li>
        )}
        {isAuthenticated && (
          <>
            <li>
              <span>Olá, {userName}</span>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </>
        )}
      </ul>
      <Modal show={showModal} onClose={handleCloseModal}>
        <Login />
      </Modal>
    </nav>
  );
};

export default Menu;
