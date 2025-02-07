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

  const salvarMedidas = () => {
    setMedidas((prevMedidas) => [...prevMedidas, ...linhas]);
    alert('Medidas salvas com sucesso!');
    setLinhas([{}]); // Resetar as linhas após salvar
  };

  const voltarPagina = () => {
    navigate('/');
  };

  return (
    <div>
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
                  <td><input type="date" name="data" onChange={(event) => handleInputChange(index, event)} /></td>
                  <td><input type="number" name="peitoral" onChange={(event) => handleInputChange(index, event)} /></td>
                  <td><input type="number" name="abdomem" onChange={(event) => handleInputChange(index, event)} /></td>
                  <td><input type="number" name="cintura" onChange={(event) => handleInputChange(index, event)} /></td>
                  <td><input type="number" name="quadril" onChange={(event) => handleInputChange(index, event)} /></td>
                  <td><input type="number" name="coxa" onChange={(event) => handleInputChange(index, event)} /></td>
                  <td><input type="number" name="braco" onChange={(event) => handleInputChange(index, event)} /></td>
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
