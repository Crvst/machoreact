import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // Realiza una solicitud al servidor para verificar las credenciales
            const response = await axios.post('https://localhost:7070/api/Employees/login', {
                email: email,
                password: password,
            });

            // Si la solicitud es exitosa, puedes manejar la respuesta según tus necesidades
            console.log(response.data.message);
        } catch (error) {
            // Si hay un error, maneja el error según tus necesidades
            console.error('Error de autenticación:', error.response.data.message);
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
                <button onClick={handleLogin}>Iniciar sesión</button>
            </div>
        </div>
    );
};

export default LoginForm;
