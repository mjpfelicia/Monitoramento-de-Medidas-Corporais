import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartBar, FaBullseye, FaWpforms, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import './Menu.css';

const Menu = ({ isAuthenticated, userName, handleLogout }) => {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Para controle do menu responsivo

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);  // Alterna o estado do menu responsivo
  };

  return (
    <nav className="menu-nav">
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>  {/* Botão de Menu Responsivo */}
      <ul className={isMenuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/grafico" className={({ isActive }) => isActive ? 'active' : ''}>
            <FaChartBar /> Gráfico
          </NavLink>
        </li>
        <li>
          <NavLink to="/objetivos" className={({ isActive }) => isActive ? 'active' : ''}>
            <FaBullseye /> Objetivos
          </NavLink>
        </li>
        <li>
          <NavLink to="/formulario" className={({ isActive }) => isActive ? 'active' : ''}>
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
