// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../security/AuthContext';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth(); // Usa el contexto para obtener la función de inicio de sesión
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Realiza una solicitud al servidor para verificar las credenciales
      const response = await axios.post('https://localhost:7070/api/Employees/login', {
        email: email,
        password: password,
      });

      // Si la solicitud es exitosa, puedes manejar la respuesta según tus necesidades
      console.log(response.data.message);

      // Usa la función de inicio de sesión del contexto y pasa el token
      login(response.data.token);

      // Redirige al usuario a la página protegida
      navigate('/MainSection');
    } catch (error) {
      // Si hay un error, maneja el error según tus necesidades
      console.error('Error de autenticación:', error.response.data.message);
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <link rel="stylesheet" href="/log.css"></link>

      <div>
        <h2>Login</h2>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default LoginForm;
