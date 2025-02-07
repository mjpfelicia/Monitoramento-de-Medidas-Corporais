import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ObjetivosPessoais.css';

const ObjetivosPessoais = () => {
  const [objetivos, setObjetivos] = useState({
    peso: '',
    peitoral: '',
    abdomen: '',
    cintura: '',
    quadril: '',
    coxa: '',
    braco: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObjetivos({ ...objetivos, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Objetivos definidos:', objetivos);
  };

  return (
    <div id="formulario-objetivos">
      <h2>Objetivos Pessoais</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(objetivos).map((key) => (
          <div className="campo-objetivo" key={key}>
            <label>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
              <input type="number" name={key} value={objetivos[key]} onChange={handleChange} />
            </label>
          </div>
        ))}
        <button type="submit">Definir Objetivos</button>
        <button type="button" onClick={() => navigate(-1)}>Voltar</button>
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
    </div>
  );
};

export default ObjetivosPessoais;
