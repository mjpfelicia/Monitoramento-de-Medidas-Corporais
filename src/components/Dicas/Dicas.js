// Dicas.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dicas.css';

const Dicas = () => (
  <section className="dicas-section">
    <h2>Dicas para Medir</h2>
    <ul>
      <li>Use uma fita métrica flexível.</li>
      <li>Meça sempre no mesmo horário do dia, preferencialmente de manhã.</li>
      <li>Mantenha a fita alinhada e não aperte demais.</li>
      <li><Link className='li__dicas' to="/ajuda">Ajuda</Link></li>
      <li><Link className='li__calcular' to="/IMCForm">Calculadora de IMC</Link></li>
    </ul>
  </section>
);

export default Dicas;
