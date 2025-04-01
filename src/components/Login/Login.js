import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { environment } from '../../config/environments';
import './Login.css'; // Importando o CSS para estilização

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

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const { photoURL, displayName, email, phoneNumber } = result.user;

      if (displayName && email) {
        const userData = { photoURL, displayName, email, phoneNumber };
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/user-info');
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
    <div className="login-container p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Login</h2>

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="button"
        onClick={handleGoogleLogin}
        className="google-login-button bg-blue-500 text-white p-2 rounded mt-2"
        disabled={loading}
      >
        {loading ? 'Carregando...' : 'Entrar com Gmail'}
      </button>

      <p className="mt-4">
        Não tem uma conta?{' '}
        <Link to="/registrar" className="text-blue-600">Clique aqui para registrar</Link>
      </p>
    </div>
  );
};

export default Login;
