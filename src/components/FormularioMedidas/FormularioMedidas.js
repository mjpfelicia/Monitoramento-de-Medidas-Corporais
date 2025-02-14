// FormularioMedidas.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormularioMedidas.css';
import Grafico from '../Grafico/Grafico';
import TabelaMedidas from '../Tabela/Tabela';

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
      setMedidas([]); // Resetar as medidas após salvar'
      setLinhas([{ data: '', peitoral: '', abdomem: '', cintura: '', quadril: '', coxa: '', braco: '' }]);
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
        <TabelaMedidas linhas={linhas} onInputChange={handleInputChange} onKeyDown={handleKeyDown} />
        <button type="button" onClick={adicionarLinha}>Adicionar Medidas</button>
        <button type="button" onClick={salvarMedidas}>Salvar Medidas</button>
        <button type="button" onClick={voltarPagina}>Voltar para Home</button>
      </form>
      <Grafico dados={medidas} />
    </div>
  );
};

export default FormularioMedidas;
