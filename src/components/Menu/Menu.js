import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChartBar, FaBullseye, FaWpforms, FaSignInAlt, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import './Menu.css';

const menuItems = [
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
  const [openDropdown, setOpenDropdown] = useState(null); // Para controlar o dropdown aberto
  const location = useLocation(); // Para monitorar a navegação

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setShowIcone(false); // Esconde o ícone de fitness sempre que o menu for aberto
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(prev => (prev === index ? null : index)); // Alterna o estado do dropdown
  };

  const closeDropdown = () => {
    setOpenDropdown(null); // Fecha o dropdown
  };

  // Fechar o dropdown ao navegar para outra página
  useEffect(() => {
    setOpenDropdown(null); // Fecha o dropdown se a URL mudar
  }, [location.pathname]);

  return (
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
              <ul className="dropdown-menu">
                {item.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} onClick={closeDropdown}>{link.label}</Link>
                  </li>
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
            <li>
              <span>Olá, {userName}</span>
            </li>
            <li>
              <button onClick={handleLogout} className="dropdown-button">
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
