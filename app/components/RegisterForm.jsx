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

    const handleSubmit = async (e) => {
        e.preventDefault();



        try {
            const response = await fetch('https://auth-jwt-development.up.railway.app/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log(result);

            // Redirecionar para outra página após o registro, se necessário
        } catch (error) {
            console.error('Erro ao criar usuário:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
                <input type="password" name="confirmpassword" placeholder='Confirmar Senha:' value={formData.confirmpassword} onChange={handleChange}/>
            </label>
            <br />
            <button type="submit">Registrar</button>
        </form>
    );
};

export default RegisterForm;
