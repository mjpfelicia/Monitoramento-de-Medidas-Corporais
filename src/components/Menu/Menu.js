import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaBullseye, FaWpforms, FaSignInAlt, FaSignOutAlt, FaChevronDown, FaUser } from 'react-icons/fa';

import './Menu.css';

const menuItems = [
  {
    name: "Perfil do Usuário", icon: <FaUser />, links: [
      { path: "/user-info", label: "Perfil do Usuário" },
    ]
  },
  
  {
    name: "Gráficos", icon: <FaChartBar />, links: [
      { path: "/grafico", label: "Ver Gráfico de Medidas" }
    ]
  },
  {
    name: "Objetivos", icon: <FaBullseye />, links: [
      { path: "/objetivos", label: "Definir Objetivos" }
    ]
  },
  {
    name: "Saúde e Medidas", icon: <FaWpforms />, links: [
      { path: "/ajuda", label: "Tutoriais e Ajuda" },
      { path: "/formulario", label: "Adicionar Medidas" },
      { path: "/IMCForm", label: "Calculadora de IMC" },
      { path: "/composicao-corporal", label: "Análise de Composição Corporal" },
      { path: "/calculo-macronutrientes", label: "Calcular Macronutrientes e Calorias" }
    ]
  }
];

const Menu = ({ isAuthenticated, userName, handleLogout, setShowIcone }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setShowIcone(false);  // Esconde o ícone quando o menu for aberto
  };

  const toggleDropdown = (index) => setOpenDropdown(prev => (prev === index ? null : index));

  const handleLoginSuccess = (user) => {
    setUserData({ displayName: user.displayName, email: user.email, photoURL: user.photoURL });
  };

  return (
    <div>
      <nav className="menu-nav">
        <button className="menu-toggle" onClick={toggleMenu} aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}>
          ☰
        </button>

        <ul className={isMenuOpen ? 'open' : ''}>
          {menuItems.map((item, index) => (
            <li key={index} className="dropdown">
              <button className="dropdown-button" onClick={() => toggleDropdown(index)}>
                {item.icon} {item.name} <FaChevronDown />
              </button>
              {openDropdown === index && (
                <ul className="dropdown-menu column" style={{ borderRadius: '0 0 0.3125rem 0.3125rem' }}>
                  {item.links.map((link, i) => (
                    <li key={i}><Link to={link.path}>{link.label}</Link></li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {!isAuthenticated ? (
            <li>
              <Link to="/login" className="dropdown-button">
                <FaSignInAlt /> Login
              </Link>
            </li>
          ) : (
            <>
              <li><span>Olá, {userData?.displayName}</span></li>
              <li><img src={userData?.photoURL} alt="Foto do usuário" className="user-photo" /></li>
              <li>
                <button onClick={handleLogout} className="dropdown-button">
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
