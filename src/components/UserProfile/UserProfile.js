import React, { useState, useEffect } from 'react';
import '../UserProfile/UserProfile.css';

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const [medidasAtuais, setMedidasAtuais] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const medidasSalvas = JSON.parse(localStorage.getItem('medidasAtuais'));

    if (userData) {
      setUser(userData);
    }

    if (medidasSalvas) {
      setMedidasAtuais(medidasSalvas);
    }
  }, []);

  return (
    <div className="user-info-container">
      {user ? (
        <>
          <h2 className="user-info-title">Informações do Usuário</h2>
          <div className="user-info-card">
            <div className="user-info-details">
              <img src={user.photoURL} alt="Foto do usuário" className="user-info-photo" />
              <div className="user-info-name">
                <h3>{user.displayName}</h3>
                <p>{user.phoneNumber}</p>
                <p>{user.address}</p>
                <p>{user.email}</p>
              </div>
            </div>
            <h3 className="user-info-subtitle">Suas Medidas Atuais</h3>
            <ul className="user-info-measurements">
              {Object.entries(medidasAtuais).map(([key, value]) => (
                <li key={key} className="user-info-measurement">
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value} cm
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Carregando as informações...</p>
      )}
    </div>
  );
};

export default UserInfo;
