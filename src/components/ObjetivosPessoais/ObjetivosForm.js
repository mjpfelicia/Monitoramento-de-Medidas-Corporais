import React from 'react';

const ObjetivosForm = ({ objetivos, medidasAtuais, handleChangeObjetivos, handleChangeMedidas, handleSubmit }) => {
  return (
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
  );
};

export default ObjetivosForm;
