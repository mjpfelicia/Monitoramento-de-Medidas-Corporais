import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormularioMedidas.css';
import Grafico from '../Grafico/Grafico';

const FormularioMedidas = () => {
  const [linhas, setLinhas] = useState([{}]);
  const [medidas, setMedidas] = useState([]);
  const navigate = useNavigate();

  const adicionarLinha = () => {
    setLinhas([...linhas, {}]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const novasLinhas = [...linhas];
    novasLinhas[index][name] = value;
    setLinhas(novasLinhas);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const form = event.target.form;
      const nextIndex = Array.prototype.indexOf.call(form, event.target) + 1;
      if (nextIndex < form.length) {
        form.elements[nextIndex].focus();
      }
    }
  };

  const salvarMedidas = () => {
    const medidasValidas = linhas.filter(linha => linha.data && linha.peitoral && linha.abdomem && linha.cintura && linha.quadril && linha.coxa && linha.braco);
    if (medidasValidas.length > 0) {
      setMedidas((prevMedidas) => [...prevMedidas, ...medidasValidas]);
      alert('Medidas salvas com sucesso!');
      setLinhas([{}]); // Resetar as linhas após salvar
    } else {
      alert('Preencha todas as medidas antes de salvar.');
    }
  };

  const voltarPagina = () => {
    navigate('/');
  };

  return (
    <div className="container-medidas">
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
                <tr key={index}>
                  <td><input type="date" name="data" onChange={(event) => handleInputChange(index, event)} onKeyDown={(event) => handleKeyDown(event, index)} /></td>
                  <td><input type="number" name="peitoral" onChange={(event) => handleInputChange(index, event)} onKeyDown={(event) => handleKeyDown(event, index)} /></td>
                  <td><input type="number" name="abdomem" onChange={(event) => handleInputChange(index, event)} onKeyDown={(event) => handleKeyDown(event, index)} /></td>
                  <td><input type="number" name="cintura" onChange={(event) => handleInputChange(index, event)} onKeyDown={(event) => handleKeyDown(event, index)} /></td>
                  <td><input type="number" name="quadril" onChange={(event) => handleInputChange(index, event)} onKeyDown={(event) => handleKeyDown(event, index)} /></td>
                  <td><input type="number" name="coxa" onChange={(event) => handleInputChange(index, event)} onKeyDown={(event) => handleKeyDown(event, index)} /></td>
                  <td><input type="number" name="braco" onChange={(event) => handleInputChange(index, event)} onKeyDown={(event) => handleKeyDown(event, index)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="button" onClick={adicionarLinha}>Adicionar Medidas</button>
        <button type="button" onClick={salvarMedidas}>Salvar Medidas</button>
        <button type="button" onClick={voltarPagina}>Voltar para Home</button>
      </form>
      <Grafico dados={medidas} />
    </div>
  );
};

export default FormularioMedidas;
