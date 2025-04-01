// src/components/UserInfo.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../UserProfile/UserProfile.css';

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="user-info p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold">Informações do Usuário</h2>
      <img
        src={user.photoURL || '/images/default-avatar.png'}
        alt="Foto do Usuário"
        className="w-24 h-24 rounded-full my-2"
      />
      <p><strong>Nome:</strong> {user.displayName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Telefone:</strong> {user.phoneNumber || 'Não fornecido'}</p>
    </div>
  );
};

export default UserInfo;
