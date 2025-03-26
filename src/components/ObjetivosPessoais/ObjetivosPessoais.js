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

  const [diferencas, setDiferencas] = useState({});
  const [porcentagens, setPorcentagens] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const objetivosSalvos = JSON.parse(localStorage.getItem('objetivos'));
    const medidasAtuaisSalvas = JSON.parse(localStorage.getItem('medidasAtuais'));
    const macronutrientesSalvos = JSON.parse(localStorage.getItem('macronutrientes'));

    if (objetivosSalvos) setObjetivos(objetivosSalvos);
    if (medidasAtuaisSalvas) setMedidasAtuais(medidasAtuaisSalvas);
    if (macronutrientesSalvos) setMacronutrientes(macronutrientesSalvos);
  }, []);

  const handleChangeObjetivos = (e) => {
    const { name, value } = e.target;
    setObjetivos({ ...objetivos, [name]: value ? Number(value) : '' });
  };

  const handleChangeMedidas = (e) => {
    const { name, value } = e.target;
    setMedidasAtuais({ ...medidasAtuais, [name]: value ? Number(value) : '' });
  };

  const calcularDiferencasEPorcentagens = () => {
    const novasDiferencas = {};
    const novasPorcentagens = {};

    Object.keys(objetivos).forEach((key) => {
      const objetivo = Number(objetivos[key]) || 0;
      const medidaAtual = Number(medidasAtuais[key]) || 0;

      if (objetivo > 0 && medidaAtual > 0) {
        novasDiferencas[key] = objetivo - medidaAtual;
        novasPorcentagens[key] = ((novasDiferencas[key] / objetivo) * 100).toFixed(2);
      } else {
        novasDiferencas[key] = 0;
        novasPorcentagens[key] = '0.00';
      }
    });

    setDiferencas(novasDiferencas);
    setPorcentagens(novasPorcentagens);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('objetivos', JSON.stringify(objetivos));
    localStorage.setItem('medidasAtuais', JSON.stringify(medidasAtuais));

    calcularDiferencasEPorcentagens();

    setTimeout(() => setIsModalOpen(true), 100);
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

      <Modalobj show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Objetivos definidos com sucesso!</h3>

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
