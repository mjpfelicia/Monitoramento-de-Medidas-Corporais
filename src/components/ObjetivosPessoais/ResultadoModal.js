import React from 'react';


const ResultadoModal = ({ isOpen, onClose, diferencas, porcentagens, macronutrientes }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>Resultados</h3>
        <div>
          <h4>Diferenças para atingir o objetivo</h4>
          <ul>
            {Object.entries(diferencas).map(([key, diferenca]) => (
              <li key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {diferenca} cm {diferenca < 0 ? 'a mais' : 'a menos'}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Porcentagem de Diferença</h4>
          <ul>
            {Object.entries(porcentagens).map(([key, porcentagem]) => (
              <li key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {porcentagem}%
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Macronutrientes Essenciais</h4>
          <ul>
            <li>Calorias para o Objetivo: {macronutrientes.caloriasObjetivo} kcal</li>
            <li>Proteínas: {macronutrientes.proteinas} g</li>
            <li>Carboidratos: {macronutrientes.carboidratos} g</li>
            <li>Gorduras: {macronutrientes.gorduras} g</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultadoModal;
