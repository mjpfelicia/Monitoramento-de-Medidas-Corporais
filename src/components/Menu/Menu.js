import React from 'react';
import { Link } from 'react-router-dom';
import '../ObjetivosPessoais/ObjetivosPessoais.css';

import './Menu.css';


const Menu = () => (
  <nav className="menu-nav">
    <ul>
      <li><Link to="/grafico">Gráfico</Link></li>
      <li><Link to="/objetivos">Objetivos</Link></li>
      <li><Link to="/formulario">Formulário</Link></li>
    </ul>
  </nav>
);

export default Menu;
