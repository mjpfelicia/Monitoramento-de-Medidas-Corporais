// TabelaMedidas.js
import React from 'react';

const TabelaMedidas = ({ linhas, onInputChange, onKeyDown }) => (
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
          <tr key={index}>
            <td><input type="date" name="data" onChange={(event) => onInputChange(index, event)} onKeyDown={(event) => onKeyDown(event, index)} /></td>
            <td><input type="number" name="peitoral" onChange={(event) => onInputChange(index, event)} onKeyDown={(event) => onKeyDown(event, index)} /></td>
            <td><input type="number" name="abdomem" onChange={(event) => onInputChange(index, event)} onKeyDown={(event) => onKeyDown(event, index)} /></td>
            <td><input type="number" name="cintura" onChange={(event) => onInputChange(index, event)} onKeyDown={(event) => onKeyDown(event, index)} /></td>
            <td><input type="number" name="quadril" onChange={(event) => onInputChange(index, event)} onKeyDown={(event) => onKeyDown(event, index)} /></td>
            <td><input type="number" name="coxa" onChange={(event) => onInputChange(index, event)} onKeyDown={(event) => onKeyDown(event, index)} /></td>
            <td><input type="number" name="braco" onChange={(event) => onInputChange(index, event)} onKeyDown={(event) => onKeyDown(event, index)} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TabelaMedidas;
