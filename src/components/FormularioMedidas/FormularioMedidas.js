import React, { useState } from 'react';
import Tabela from '../Tabela/Tabela';
import './FormularioMedidas.css';

const FormularioMedidas = () => {
  const [linhas, setLinhas] = useState([1]);

  const adicionarLinha = () => {
    setLinhas([...linhas, linhas.length + 1]);
  };
  return (
    <form id="formulario-medidas">
      <div className="tabela-container">
        <table id="tabela-medidas">
          <thead>
            <tr>
              <th>Data</th>
              <th>Peitoral (cm)</th>
              <th>Abdômen (cm)</th>
              <th>Cintura (cm)</th>
              <th>Quadril (cm)</th>
              <th>Coxa (cm)</th>
              <th>Braço (cm)</th>
            </tr>
          </thead>
          <tbody>
            {linhas.map((linha, index) => (
              <Tabela key={index} index={index + 1}/>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" onClick={adicionarLinha}>Adicionar Linha</button>
    </form>
  );
};

export default FormularioMedidas;
