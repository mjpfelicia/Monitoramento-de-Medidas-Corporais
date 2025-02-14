import React, { useState } from 'react';
import './IMCForm.css';

function IMCForm() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState('');
  const [erro, setErro] = useState('');  // Para armazenar mensagens de erro

  const calcularIMC = (e) => {
    e.preventDefault();

    // Validação
    if (!peso || !altura) {
      setErro('Por favor, preencha ambos os campos de peso e altura');
      return;
    }
    if (isNaN(peso) || isNaN(altura)) {
      setErro('Peso e altura devem ser números válidos');
      return;
    }
    if (peso <= 0 || altura <= 0) {
      setErro('Peso e altura devem ser maiores que zero');
      return;
    }

    // Limpar erros caso os dados estejam válidos
    setErro('');

    // Cálculo do IMC
    const resultadoIMC = peso / (altura * altura);
    setImc(resultadoIMC.toFixed(2));

    // Categorias
    let categoriaIMC = '';
    let icon = '';
    if (resultadoIMC < 18.5) {
      categoriaIMC = 'Abaixo do peso';
      icon = <i className="fas fa-weight-hanging"></i>;  // Ícone de balança
    } else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9) {
      categoriaIMC = 'Peso normal';
      icon = <i className="fas fa-dumbbell"></i>;  // Ícone de halteres (pessoa em boa forma)
    } else if (resultadoIMC >= 25 && resultadoIMC < 29.9) {
      categoriaIMC = 'Sobrepeso';
      icon = <i className="fas fa-users"></i>;  // Ícone de uma pessoa mais cheinha
    } else {
      categoriaIMC = 'Obesidade';
      icon = <i className="fas fa-circle"></i>;  // Ícone de círculo (representando obesidade)
    }
    setCategoria({ categoriaIMC, icon });
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
            aria-describedby="peso-help"
          />
          <small id="peso-help" className="form-text">Exemplo: 70</small>
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
            aria-describedby="altura-help"
          />
          <small id="altura-help" className="form-text">Exemplo: 1.75</small>
        </div>

        <button type="submit" className="imc-form-submit-btn">Calcular IMC</button>

        {erro && <p className="imc-form-error">{erro}</p>}  {/* Exibição de erro */}
      </form>

      {imc && !erro && (
        <div className="imc-form-results">
          <h3>Seu IMC: {imc}</h3>
          <p>
            {categoria.icon} Categoria: {categoria.categoriaIMC}
          </p>
        </div>
      )}
    </div>
  );
}

export default IMCForm;
