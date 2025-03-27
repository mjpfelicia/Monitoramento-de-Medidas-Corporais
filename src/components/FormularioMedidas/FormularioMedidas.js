import React, { useState, useEffect } from 'react';  // Adicionando useState e useEffect
import { useNavigate } from 'react-router-dom'; // Adicionando useNavigate
import { ToastContainer, toast } from 'react-toastify'; // Adicionando ToastContainer e toast
import 'react-toastify/dist/ReactToastify.css';  // Importando o CSS do react-toastify
import './FormularioMedidas.css';
import Grafico from '../Grafico/Grafico';  // Importando o componente Grafico
import TabelaMedidas from '../Tabela/Tabela';  // Importando o componente TabelaMedidas
import { obterDados, salvarDados } from '../../services/localStoreService';  // Importando funções do serviço localStoreService


const FormularioMedidas = () => {
  const [linhas, setLinhas] = useState([{
    data: '',
    peso: '',
    peitoral: '',
    abdomem: '',
    cintura: '',
    quadril: '',
    coxa: '',
    braco: ''
  }]);
  const [medidas, setMedidas] = useState([]);
  const [mostrarHistórico, setMostrarHistórico] = useState(false);  // Controle do histórico
  const navigate = useNavigate();

  useEffect(() => {
    const medidasSalvas = obterDados('medidas');
    if (medidasSalvas) {
      setMedidas(medidasSalvas);
    }
  }, []);

  const adicionarLinha = () => {
    setLinhas([...linhas, {
      data: '',
      peso: '',
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
        salvarMedidas(); 
      }
    }
  };

  const salvarMedidas = () => {
    const medidasValidas = linhas.filter(linha =>
      linha.data && linha.peitoral && linha.abdomem && linha.cintura && linha.quadril && linha.coxa && linha.braco
    );

    if (medidasValidas.length > 0) {
      setMedidas((prevMedidas) => [...prevMedidas, ...medidasValidas]);
      const medidasAntigas = obterDados('medidas');
      if (medidasAntigas && medidasAntigas.length > 0) {
        medidasAntigas.forEach(m => medidasValidas.push(m));
      }
      salvarDados('medidas', medidasValidas);
      alert('Medidas salvas com sucesso!');
      setLinhas([{
        data: '',
        peso: '',
        peitoral: '',
        abdomem: '',
        cintura: '',
        quadril: '',
        coxa: '',
        braco: ''
      }]);
    } else {
      alert('Preencha todas as medidas antes de salvar.');
    }
  };

  const voltarPagina = () => {
    navigate('/');
  };

  const mostrarHistóricoMedidas = () => {
    const medidasSalvas = obterDados('medidas');
    if (medidasSalvas) {
      setMedidas(medidasSalvas);
      setMostrarHistórico(!mostrarHistórico);  // Alterna entre mostrar e esconder o histórico
    } else {
      toast.info('Nenhuma medida registrada ainda!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="container-medidas">
      {!mostrarHistórico && (
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
            <button
              type="button"
              onClick={mostrarHistóricoMedidas}
              className="btn btn-history">
              Ver Histórico
            </button>
            <div className="container-medidas">
              <ToastContainer />
            </div>
          </div>
        </form>
      )}

      {mostrarHistórico && (
        <div className="historico-container">
          <h3>Histórico de Medidas</h3>
          <table className="tabela-historico">
            <thead>
              <tr>
                <th>Peso</th>
                <th>Data</th>
                <th>Peitoral</th>
                <th>Abdômen</th>
                <th>Cintura</th>
                <th>Quadril</th>
                <th>Coxa</th>
                <th>Braço</th>
              </tr>
            </thead>
            <tbody>
              {medidas.map((medida, index) => (
                <tr key={index}>
                  <td>{medida.data}</td>
                  <td>{medida.peso}</td>
                  <td>{medida.peitoral}</td>
                  <td>{medida.abdomem}</td>
                  <td>{medida.cintura}</td>
                  <td>{medida.quadril}</td>
                  <td>{medida.coxa}</td>
                  <td>{medida.braco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Gráfico é mostrado quando medidas são salvas */}
      {!mostrarHistórico && medidas.length > 0 && (
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
