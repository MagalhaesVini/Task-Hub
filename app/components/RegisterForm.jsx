'use client'

import React, { useState } from 'react';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const [registrationMessage, setRegistrationMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();



        try {
            const response = await fetch('https://auth-jwt-0u97.onrender.com/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log(response);
            const result = await response.json();
            console.log(result);

            if (response.ok) {
                // Registro bem-sucedido
                setRegistrationMessage('Registro bem-sucedido!');
            } else {
                // Erro no registro
                setRegistrationMessage(`Erro ao criar usuário: ${result.message}`);
            }

            // Redirecionar para outra página após o registro, se necessário
        } catch (error) {
            console.error('Erro ao criar usuário:', error.message);
            setRegistrationMessage('Erro ao criar usuário. Por favor, tente novamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>{registrationMessage}</p>
            <p>Registro de Login:</p>
            <label>
                <input type="text" name="name" placeholder='Nome:' value={formData.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                <input type="email" name="email" placeholder='Email:' value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <label>
                <input type="password" name="password" placeholder='Senha:' value={formData.password} onChange={handleChange} />
            </label>
            <br />
            <label>
                <input type="password" name="confirmpassword" placeholder='Confirmar Senha:' value={formData.confirmpassword} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Registrar</button>
            <br />
            <p>Já possui uma conta? Ótimo! <a href="https://task-hub-magalhaes.vercel.app/Login" rel="noopener noreferrer">Faça o login aqui.</a> Se não, crie sua conta acima</p>
            
        </form>
    );
};

export default RegisterForm;
