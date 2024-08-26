'use client'

import React, { useState } from 'react';

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const [loginMessage, setLoginMessage] = useState('');

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://auth-jwt-0u97.onrender.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const result = await response.json();
            console.log(result);

            if (response.ok) {
                setLoginMessage('Login realizado com sucesso!');
                setLoginData({
                    email: '',
                    password: '',
                });
            } else {
                if (response.status === 404) {
                    setLoginMessage('Usuário não encontrado.');
                } else if (response.status === 422) {
                    setLoginMessage('Senha inválida.');
                }
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
            setLoginMessage('Erro ao fazer login. Por favor, tente novamente.');
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            {loginMessage && <p>{loginMessage}</p>}
            <form onSubmit={handleSubmit}>
                <p>Login:</p>
                <label>
                    <input type="email" name="email" placeholder='Email:' value={loginData.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    <input type="password" name="password" placeholder='Senha:' value={loginData.password} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Login</button>
                <br />
                <p>Novo por aqui? <a href="https://task-hub-magalhaes.vercel.app/Registro" rel="noopener noreferrer">Crie sua conta clicando aqui.</a> Se já tem uma conta, basta fazer o login.</p>
            </form>
        </div>
    );
};

export default LoginForm;
