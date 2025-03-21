import React, { useState, useEffect } from 'react';
import './ObjetivosPessoais.css';
import Modalobj from '../Modal/Modalobj'; 

const ObjetivosPessoais = () => {
  const [objetivos, setObjetivos] = useState({
    peso: '',
    peitoral: '',
    abdomen: '',
    cintura: '',
    quadril: '',
    coxa: '',
    braco: '',
  });

  const [medidasAtuais, setMedidasAtuais] = useState({
    peso: '',
    peitoral: '',
    abdomen: '',
    cintura: '',
    quadril: '',
    coxa: '',
    braco: '',
  });

  const [macronutrientes, setMacronutrientes] = useState({
    caloriasObjetivo: 0,
    proteinas: 0,
    carboidratos: 0,
    gorduras: 0,
  });

  const [diferencas, setDiferencas] = useState({
    peso: 0,
    peitoral: 0,
    abdomen: 0,
    cintura: 0,
    quadril: 0,
    coxa: 0,
    braco: 0,
  });

  const [porcentagens, setPorcentagens] = useState({
    peso: 0,
    peitoral: 0,
    abdomen: 0,
    cintura: 0,
    quadril: 0,
    coxa: 0,
    braco: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal

  useEffect(() => {
    // Carregar os dados do localStorage
    const objetivosSalvos = JSON.parse(localStorage.getItem('objetivos'));
    const medidasAtuaisSalvas = JSON.parse(localStorage.getItem('medidasAtuais'));
    const macronutrientesSalvos = JSON.parse(localStorage.getItem('macronutrientes'));

    if (objetivosSalvos) setObjetivos(objetivosSalvos);
    if (medidasAtuaisSalvas) setMedidasAtuais(medidasAtuaisSalvas);
    if (macronutrientesSalvos) setMacronutrientes(macronutrientesSalvos);
  }, []);

  const handleChangeObjetivos = (e) => {
    const { name, value } = e.target;
    setObjetivos({ ...objetivos, [name]: value });
  };

  const handleChangeMedidas = (e) => {
    const { name, value } = e.target;
    setMedidasAtuais({ ...medidasAtuais, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('objetivos', JSON.stringify(objetivos));
    localStorage.setItem('medidasAtuais', JSON.stringify(medidasAtuais));

    calcularDiferencas();
    calcularPorcentagens();
    setIsModalOpen(true); // Abre o modal após o envio do formulário
  };

  const calcularDiferencas = () => {
    const novasDiferencas = {};
    Object.keys(objetivos).forEach((key) => {
      if (objetivos[key] && medidasAtuais[key]) {
        novasDiferencas[key] = objetivos[key] - medidasAtuais[key];
      }
    });
    setDiferencas(novasDiferencas);
  };

  const calcularPorcentagens = () => {
    const novasPorcentagens = {};
    Object.keys(objetivos).forEach((key) => {
      if (objetivos[key] && medidasAtuais[key]) {
        const porcentagem = ((objetivos[key] - medidasAtuais[key]) / objetivos[key]) * 100;
        novasPorcentagens[key] = porcentagem.toFixed(2);
      }
    });
    setPorcentagens(novasPorcentagens);
  };

  return (
    <div id="formulario-objetivos">

      <form onSubmit={handleSubmit}>
        <h3>Objetivos Físicos</h3>
        {Object.keys(objetivos).map((key) => (
          <div className="campo-objetivo" key={key}>
            <label>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
              <input
                type="number"
                name={key}
                value={objetivos[key]}
                onChange={handleChangeObjetivos}
                placeholder="Objetivo"
              />
            </label>
          </div>
        ))}

        <h3>Medidas Atuais</h3>
        {Object.keys(medidasAtuais).map((key) => (
          <div className="campo-objetivo" key={key}>
            <label>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
              <input
                type="number"
                name={key}
                value={medidasAtuais[key]}
                onChange={handleChangeMedidas}
                placeholder="Medida Atual"
              />
            </label>
          </div>
        ))}

        <button type="submit">Definir Objetivos</button>
      </form>

      {/* Modal exibido após o envio do formulário */}
      <Modalobj show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Objetivos definidos com sucesso!</h3>

        {/* Seção de Exibição dos Objetivos e Medidas */}
        <div className="seção">
          <div className="objetivos-exibidos">
            <h3>Seus Objetivos</h3>
            <ul>
              {Object.entries(objetivos).map(([key, value]) => (
                <li key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="medidas-exibidas">
            <h3>Suas Medidas Atuais</h3>
            <ul>
              {Object.entries(medidasAtuais).map(([key, value]) => (
                <li key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Seção de Diferenças e Porcentagens */}
        <div className="seção">
          <div className="diferencas-exibidas">
            <h3>Diferença para atingir o objetivo</h3>
            <ul>
              {Object.entries(diferencas).map(([key, diferenca]) => (
                <li key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {diferenca} cm{' '}
                  {diferenca < 0 ? 'a mais' : 'a menos'}
                </li>
              ))}
            </ul>
          </div>

          <div className="porcentagens-exibidas">
            <h3>Porcentagem de Diferença para atingir o objetivo</h3>
            <ul>
              {Object.entries(porcentagens).map(([key, porcentagem]) => (
                <li key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {porcentagem}%
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Seção de Macronutrientes */}
        <div className="seção">
          <div className="macronutrientes-exibidos">
            <h3>Entenda os Nutrientes Essenciais para Chegar ao Seu Objetivo</h3>
            <ul>
              <li>Calorias para o Objetivo: {macronutrientes.caloriasObjetivo} kcal</li>
              <li>Proteínas: {macronutrientes.proteinas} g</li>
              <li>Carboidratos: {macronutrientes.carboidratos} g</li>
              <li>Gorduras: {macronutrientes.gorduras} g</li>
            </ul>
          </div>
        </div>

      
      </Modalobj>
    </div>
  );
};

export default ObjetivosPessoais;
