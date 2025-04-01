import React from 'react';
import { useLocation } from 'react-router-dom';
import './UserProfile.css';

const Informacoes = () => {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return <div>Informações não encontradas.</div>;
  }

  return (
    <div className="informacoes-container">
      <h2>Informações do Usuário</h2>
      <div className="user-info">
        <img src={user.photoURL} alt="Foto do Usuário" />
        <h3>{user.displayName}</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Telefone:</strong> {user.phoneNumber || 'Não fornecido'}</p>
      </div>
    </div>
  );
};

export default Informacoes;
