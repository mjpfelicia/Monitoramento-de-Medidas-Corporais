import React, { useState, useEffect } from 'react';
import './ObjetivosPessoais.css';

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

  useEffect(() => {
    // Obtém os dados de objetivos, medidas e macronutrientes do localStorage
    const objetivosSalvos = JSON.parse(localStorage.getItem('objetivos'));
    const medidasAtuaisSalvas = JSON.parse(localStorage.getItem('medidasAtuais'));
    const macronutrientesSalvos = JSON.parse(localStorage.getItem('macronutrientes'));

    if (objetivosSalvos) {
      setObjetivos(objetivosSalvos);
    }

    if (medidasAtuaisSalvas) {
      setMedidasAtuais(medidasAtuaisSalvas);
    }

    if (macronutrientesSalvos) {
      setMacronutrientes(macronutrientesSalvos);
    }
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
    console.log('Objetivos definidos:', objetivos);
    console.log('Medidas atuais:', medidasAtuais);

    // Salva os dados atualizados no localStorage
    localStorage.setItem('objetivos', JSON.stringify(objetivos));
    localStorage.setItem('medidasAtuais', JSON.stringify(medidasAtuais));

    calcularDiferencas();
    calcularPorcentagens();
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
        // Calculando a porcentagem de diferença em relação ao objetivo
        const porcentagem = ((objetivos[key] - medidasAtuais[key]) / objetivos[key]) * 100;
        novasPorcentagens[key] = porcentagem.toFixed(2);  // Limitando a 2 casas decimais
      }
    });
    setPorcentagens(novasPorcentagens);
  };

  return (
    <div id="formulario-objetivos">
      <h2>Objetivos Pessoais</h2>

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

      <div className="diferencas-exibidas">
        <h3>Diferença para atingir o objetivo</h3>
        <ul>
          {Object.entries(diferencas).map(([key, diferenca]) => (
            <li key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}: {diferenca} cm {diferenca < 0 ? 'a mais' : 'a menos'}
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

      <div className="macronutrientes-exibidos">
        <h3>Entenda os Nutrientes Essenciais para Chegar ao Seu Objet</h3>
        <ul>
          <li>Calorias para o Objetivo: {macronutrientes.caloriasObjetivo} kcal</li>
          <li>Proteínas: {macronutrientes.proteinas} g</li>
          <li>Carboidratos: {macronutrientes.carboidratos} g</li>
          <li>Gorduras: {macronutrientes.gorduras} g</li>
        </ul>
      </div>
    </div>
  );
};

export default ObjetivosPessoais;
