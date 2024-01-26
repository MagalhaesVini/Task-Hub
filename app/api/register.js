// pages/api/register.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Aqui você pode realizar a chamada para a sua API de registro
      const apiResponse = await fetch('https://auth-jwt-development.up.railway.app/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });
  
      const data = await apiResponse.json();
      
      // Você pode manipular a resposta da API e enviar uma resposta personalizada se necessário
      res.status(apiResponse.status).json(data);
    } else {
      res.status(405).end(); // Método não permitido
    }
  }
  