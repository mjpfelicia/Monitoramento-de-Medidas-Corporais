import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './Login.css';
import { environment } from '../../config/environments';

// Configuração do Firebase
const firebaseConfig = {
  ...environment.firebase,
  projectId: "medidascorporais-819b6",
  storageBucket: "medidas",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = ({ onLoginSuccess }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const userData = result.user;

      const { photoURL, displayName, email, phoneNumber } = userData || {};
      if (displayName && email) {
        setUser({ photoURL, displayName, email, phoneNumber });
        onLoginSuccess({ displayName, email, photoURL });
        navigate('/formulario');
      } else {
        throw new Error('Informações do usuário não encontradas.');
      }
    } catch (error) {
      setError('Erro ao fazer login com Google: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {error && <p className="error-message">{error}</p>}

      <button
        type="button"
        onClick={handleGoogleLogin}
        className="google-login-button"
        disabled={loading}
      >
        {loading ? 'Carregando...' : 'Entrar com Gmail'}
      </button>

      <p>
        Não tem uma conta? <Link to="/registrar">Clique aqui para registrar</Link>
      </p>

      {user && (
        <div className="user-info">
          <h3>Informações do Usuário:</h3>
          <p><strong>Nome:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Telefone:</strong> {user.phoneNumber || 'Não fornecido'}</p>
          <img src={user.photoURL} alt="Foto do Usuário" />
        </div>
      )}
    </div>
  );
};

export default Login;
