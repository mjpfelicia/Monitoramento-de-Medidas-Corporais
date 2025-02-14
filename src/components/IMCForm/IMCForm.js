import React, { useState } from 'react';
import './IMCForm.css';
function IMCForm() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();

    if (!peso || !altura || isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
      alert('Por favor, insira valores válidos de peso e altura');
      return;
    }

    const resultadoIMC = peso / (altura * altura);
    setImc(resultadoIMC.toFixed(2));

    let categoriaIMC = '';
    if (resultadoIMC < 18.5) {
      categoriaIMC = 'Abaixo do peso';
    } else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9) {
      categoriaIMC = 'Peso normal';
    } else if (resultadoIMC >= 25 && resultadoIMC < 29.9) {
      categoriaIMC = 'Sobrepeso';
    } else {
      categoriaIMC = 'Obesidade';
    }
    setCategoria(categoriaIMC);
  };

  return (
    <div className="imc-form-container">
      <h2 className="imc-form-title">Calculadora de IMC</h2>
      <form onSubmit={calcularIMC} className="imc-form">
        <div className="imc-form-group">
          <label htmlFor="peso" className="imc-form-label">Peso (kg): </label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite seu peso"
            className="imc-form-input"
          />
        </div>
        <div className="imc-form-group">
          <label htmlFor="altura" className="imc-form-label">Altura (m): </label>
          <input
            type="number"
            id="altura"
            step="0.01"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Digite sua altura"
            className="imc-form-input"
          />
        </div>
        <button type="submit" className="imc-form-submit-btn">Calcular IMC</button>
      </form>

      {imc && (
        <div className="imc-form-results">
          <h3>Seu IMC: {imc}</h3>
          <p>Categoría: {categoria}</p>
        </div>
      )}
    </div>
  );
}

export default IMCForm;
