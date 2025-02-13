import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica de autenticação (ex: Firebase)
    if (email && password) {
      // Exemplo de lógica de autenticação
      // auth.signInWithEmailAndPassword(email, password)
      //   .then(() => {
      //     setError('');
      //     onClose(); // Fechar o modal após login
      //     navigate('/'); // Opcional: redirecionar após o login
      //   })
      //   .catch((err) => setError(err.message));
      console.log('Login realizado com sucesso');
      navigate('/');
    } else {
      setError('Todos os campos são obrigatórios');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Clique aqui para registrar</Link>
      </p>
    </div>
  );
};

export default Login;
