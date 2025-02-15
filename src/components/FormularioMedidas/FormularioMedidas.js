import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormularioMedidas.css';
import Grafico from '../Grafico/Grafico';
import TabelaMedidas from '../Tabela/Tabela';

const FormularioMedidas = () => {
  const [linhas, setLinhas] = useState([{
    data: '',
    peitoral: '',
    abdomem: '',
    cintura: '',
    quadril: '',
    coxa: '',
    braco: ''
  }]);
  const [medidas, setMedidas] = useState([]);
  const [mostrarGrafico, setMostrarGrafico] = useState(false);
  const navigate = useNavigate();

  const adicionarLinha = () => {
    setLinhas([...linhas, {
      data: '',
      peitoral: '',
      abdomem: '',
      cintura: '',
      quadril: '',
      coxa: '',
      braco: ''
    }]);
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
      } else {
        salvarMedidas(); // Se for o último campo, chama a função de salvar
      }
    }
  };

  const salvarMedidas = () => {
    const medidasValidas = linhas.filter(linha => 
      linha.data && linha.peitoral && linha.abdomem && linha.cintura && linha.quadril && linha.coxa && linha.braco
    );

    if (medidasValidas.length > 0) {
      setMedidas((prevMedidas) => [...prevMedidas, ...medidasValidas]);
      alert('Medidas salvas com sucesso!');
      setLinhas([{
        data: '',
        peitoral: '',
        abdomem: '',
        cintura: '',
        quadril: '',
        coxa: '',
        braco: ''
      }]);
      setMostrarGrafico(true);
    } else {
      alert('Preencha todas as medidas antes de salvar.');
    }
  };

  const voltarPagina = () => {
    navigate('/');
  };

  return (
    <div className="container-medidas">
      {!mostrarGrafico && (
        <form id="formulario-medidas">
          <TabelaMedidas 
            linhas={linhas} 
            onInputChange={handleInputChange} 
            onKeyDown={handleKeyDown} 
          />
          <div className="buttons-container">
            <button 
              type="button" 
              onClick={adicionarLinha} 
              className="btn btn-add"
            >
              Adicionar Medidas
            </button>
            <button 
              type="button" 
              onClick={salvarMedidas} 
              className="btn btn-save"
            >
              Salvar Medidas
            </button>
          </div>
        </form>
      )}

      {mostrarGrafico && (
        <div>
          <Grafico dados={medidas} />
          <div className="buttons-container">
            <button 
              type="button" 
              onClick={voltarPagina} 
              className="btn btn-back"
            >
              Voltar para Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormularioMedidas;
