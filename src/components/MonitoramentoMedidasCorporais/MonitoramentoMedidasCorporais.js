import React from 'react';
import IconeFitness from '../IconeFitness/IconeFitness.js';
import Menu from '../Menu/Menu.js';
import Header from '../Header/Header.js';
import './MonitoramentoMedidasCorporais.css';

const MonitoramentoMedidasCorporais = () => (
  <div className="monitoramento-medidas-container">
    <Menu />
    <Header />
    <div className="conteudo">
      <IconeFitness />
    </div>
  </div>
);

export default MonitoramentoMedidasCorporais;
