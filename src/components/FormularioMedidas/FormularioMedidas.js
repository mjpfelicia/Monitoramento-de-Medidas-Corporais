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
  const [mostrarGrafico, setMostrarGrafico] = useState(false); // Estado para controlar a exibição do gráfico
  const navigate = useNavigate();

  // Função para adicionar uma nova linha
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

  // Função para lidar com a mudança de input
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const novasLinhas = [...linhas];
    novasLinhas[index][name] = value;
    setLinhas(novasLinhas);
  };

  // Função para navegar pelo formulário com a tecla Enter
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

  // Função para salvar as medidas
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
      setMostrarGrafico(true); // Exibe o gráfico após salvar as medidas
    } else {
      alert('Preencha todas as medidas antes de salvar.');
    }
  };

  // Função para voltar para a página inicial
  const voltarPagina = () => {
    navigate('/');
  };

  return (
    <div className="container-medidas">
      {/* Exibe o formulário apenas se o gráfico não for mostrado */}
      {!mostrarGrafico && (
        <form id="formulario-medidas">
          <TabelaMedidas 
            linhas={linhas} 
            onInputChange={handleInputChange} 
            onKeyDown={handleKeyDown} // Passando a função onKeyDown aqui
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

      {/* Exibe o gráfico apenas se 'mostrarGrafico' for true */}
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
