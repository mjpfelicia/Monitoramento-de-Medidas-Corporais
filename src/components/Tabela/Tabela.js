import React from 'react';

const TabelaMedidas = ({ linhas, onInputChange, onKeyDown }) => (
  <div className="tabela-container">
    <table id="tabela-medidas">
      <thead>
        <tr>
          <th>Data</th>
          <th>Peso (kg)</th>
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
            <td>
              <input 
                type="date" 
                name="data" 
                value={linha.data || ""}
                onChange={(event) => onInputChange(index, event)}
                onKeyDown={(event) => onKeyDown(event, index)}
                aria-label="Data"
              />
            </td>
            <td>
              <input 
                type="number" 
                name="peso"
                value={linha.peso || ""}
                onChange={(event) => onInputChange(index, event)}
                onKeyDown={(event) => onKeyDown(event, index)}
                aria-label="Peso"
                placeholder="kg"
                min="0"
              />
            </td>
            <td>
              <input 
                type="number" 
                name="peitoral"
                value={linha.peitoral || ""}
                onChange={(event) => onInputChange(index, event)}
                onKeyDown={(event) => onKeyDown(event, index)}
                aria-label="Peitoral"
                placeholder="cm"
                min="0"
              />
            </td>
            <td>
              <input 
                type="number" 
                name="abdomem"
                value={linha.abdomem || ""}
                onChange={(event) => onInputChange(index, event)}
                onKeyDown={(event) => onKeyDown(event, index)}
                aria-label="Abdômen"
                placeholder="cm"
                min="0"
              />
            </td>
            <td>
              <input 
                type="number" 
                name="cintura"
                value={linha.cintura || ""}
                onChange={(event) => onInputChange(index, event)}
                onKeyDown={(event) => onKeyDown(event, index)}
                aria-label="Cintura"
                placeholder="cm"
                min="0"
              />
            </td>
            <td>
              <input 
                type="number" 
                name="quadril"
                value={linha.quadril || ""}
                onChange={(event) => onInputChange(index, event)}
                onKeyDown={(event) => onKeyDown(event, index)}
                aria-label="Quadril"
                placeholder="cm"
                min="0"
              />
            </td>
            <td>
              <input 
                type="number" 
                name="coxa"
                value={linha.coxa || ""}
                onChange={(event) => onInputChange(index, event)}
                onKeyDown={(event) => onKeyDown(event, index)}
                aria-label="Coxa"
                placeholder="cm"
                min="0"
              />
            </td>
            <td>
              <input 
                type="number" 
                name="braco"
                value={linha.braco || ""}
                onChange={(event) => onInputChange(index, event)}
                onKeyDown={(event) => onKeyDown(event, index)}
                aria-label="Braço"
                placeholder="cm"
                min="0"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TabelaMedidas;
