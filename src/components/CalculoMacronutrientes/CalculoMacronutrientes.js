import React, { useState } from 'react';
import './CalculoMacronutrientes.css'; // Certifique-se de que o arquivo de CSS seja importado

const CalculoMacronutrientes = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('masculino');
  const [nivelAtividade, setNivelAtividade] = useState('moderado');
  const [objetivo, setObjetivo] = useState('manutencao');
  const [resultado, setResultado] = useState(null);

  // Função para calcular o BMR (Taxa de Metabolismo Basal)
  const calcularBMR = () => {
    if (peso && altura && idade) {
      const alturaCm = altura * 100; // Convertendo altura para cm
      if (sexo === 'masculino') {
        return 10 * peso + 6.25 * alturaCm - 5 * idade + 5; // Fórmula para homens
      } else {
        return 10 * peso + 6.25 * alturaCm - 5 * idade - 161; // Fórmula para mulheres
      }
    }
    return 0;
  };

  // Função para calcular o TDEE (Total Daily Energy Expenditure)
  const calcularTDEE = (bmr) => {
    let fatorAtividade = 1.55; // Valor padrão para atividade moderada
    switch (nivelAtividade) {
      case 'sedentario':
        fatorAtividade = 1.2;
        break;
      case 'moderado':
        fatorAtividade = 1.55;
        break;
      case 'intenso':
        fatorAtividade = 1.9;
        break;
      default:
        fatorAtividade = 1.55;
    }
    return bmr * fatorAtividade;
  };

  // Função para calcular os macronutrientes e calorias recomendadas
  const calcularMacronutrientes = () => {
    const bmr = calcularBMR();
    const tdee = calcularTDEE(bmr);
    
    let caloriasObjetivo = tdee;

    // Ajuste de calorias baseado no objetivo
    if (objetivo === 'perda') {
      caloriasObjetivo -= 500; // Déficit de 500 calorias para perda de peso
    } else if (objetivo === 'ganho') {
      caloriasObjetivo += 500; // Superávit de 500 calorias para ganho de peso
    }

    // Calcular macronutrientes
    const proteinas = (peso * 2.2).toFixed(2); // 2.2g de proteína por kg de peso corporal
    const carboidratos = (peso * 4).toFixed(2); // 4g de carboidrato por kg de peso corporal
    const gorduras = (peso * 1).toFixed(2); // 1g de gordura por kg de peso corporal

    setResultado({
      tdee,
      caloriasObjetivo,
      proteinas,
      carboidratos,
      gorduras
    });
  };

  return (
    <div className="calculoMacronutrientes-container">
      <h2 className="calculoMacronutrientes-title">Calcular Macronutrientes e Calorias</h2>
      <form className="calculoMacronutrientes-form">
        <label className="calculoMacronutrientes-label">Peso (kg):</label>
        <input
          className="calculoMacronutrientes-input"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <label className="calculoMacronutrientes-label">Altura (m):</label>
        <input
          className="calculoMacronutrientes-input"
          type="number"
          step="0.01"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <label className="calculoMacronutrientes-label">Idade (anos):</label>
        <input
          className="calculoMacronutrientes-input"
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <label className="calculoMacronutrientes-label">Sexo:</label>
        <select
          className="calculoMacronutrientes-input"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        >
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>

        <label className="calculoMacronutrientes-label">Nível de Atividade:</label>
        <select
          className="calculoMacronutrientes-input"
          value={nivelAtividade}
          onChange={(e) => setNivelAtividade(e.target.value)}
        >
          <option value="sedentario">Sedentário</option>
          <option value="moderado">Moderado</option>
          <option value="intenso">Intenso</option>
        </select>

        <label className="calculoMacronutrientes-label">Objetivo:</label>
        <select
          className="calculoMacronutrientes-input"
          value={objetivo}
          onChange={(e) => setObjetivo(e.target.value)}
        >
          <option value="manutencao">Manutenção de peso</option>
          <option value="perda">Perda de peso (Déficit calórico)</option>
          <option value="ganho">Ganho de peso (Superávit calórico)</option>
        </select>
      </form>

      <button className="calculoMacronutrientes-button" onClick={calcularMacronutrientes}>Calcular</button>

      {resultado && (
        <div className="calculoMacronutrientes-result">
          <p>TDEE (Calorias de Manutenção): {resultado.tdee.toFixed(2)} kcal</p>
          <p>Calorias para o Objetivo ({objetivo}): {resultado.caloriasObjetivo.toFixed(2)} kcal</p>
          <p>Proteínas: {resultado.proteinas} g</p>
          <p>Carboidratos: {resultado.carboidratos} g</p>
          <p>Gorduras: {resultado.gorduras} g</p>
        </div>
      )}
    </div>
  );
};

export default CalculoMacronutrientes;
