import React from 'react';
import Cabecalho from '../header/Header.js';
import IconeFitness from '../IconeFitness/IconeFitness.js';
import Menu from '../Menu/Menu.js';
import './MonitoramentoMedidasCorporais.css';

const MonitoramentoMedidasCorporais = () => (
  <div className="monitoramento-medidas-container">
    <Menu />
    <Cabecalho />
    <div className="conteudo">
      <IconeFitness />
    </div>
  </div>
);

export default MonitoramentoMedidasCorporais;
