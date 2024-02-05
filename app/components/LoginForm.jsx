'use client'

import React, { useState } from 'react';

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://auth-jwt-development.up.railway.app/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const result = await response.json();
            console.log(result);

        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
        }
    };

    return (
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
        </form>
    );
};

export default LoginForm;