import React, { useState } from 'react';
import './CompomentePerfil.css';




const Perfil = () => {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    metaPeitoral: '',
    metaAbdomem: '',
    metaCintura: '',
    metaQuadril: '',
    metaCoxa: '',
    metaBraco: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para salvar os dados do usuário
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Perfil salvo com sucesso!');
  };

  return (
    <div className="perfil-container">
      <h2>Perfil do Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={usuario.nome} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={usuario.email} onChange={handleInputChange} />
        </label>
        <label>
          Meta Peitoral (cm):
          <input type="number" name="metaPeitoral" value={usuario.metaPeitoral} onChange={handleInputChange} />
        </label>
        <label>
          Meta Abdômen (cm):
          <input type="number" name="metaAbdomem" value={usuario.metaAbdomem} onChange={handleInputChange} />
        </label>
        <label>
          Meta Cintura (cm):
          <input type="number" name="metaCintura" value={usuario.metaCintura} onChange={handleInputChange} />
        </label>
        <label>
          Meta Quadril (cm):
          <input type="number" name="metaQuadril" value={usuario.metaQuadril} onChange={handleInputChange} />
        </label>
        <label>
          Meta Coxa (cm):
          <input type="number" name="metaCoxa" value={usuario.metaCoxa} onChange={handleInputChange} />
        </label>
        <label>
          Meta Braço (cm):
          <input type="number" name="metaBraco" value={usuario.metaBraco} onChange={handleInputChange} />
        </label>
        <button type="submit">Salvar Perfil</button>
      </form>
    </div>
  );
};

export default Perfil;
