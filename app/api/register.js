export default async function handler(req, res) {
    if (req.method === 'POST') {

      const apiResponse = await fetch('https://auth-jwt-development.up.railway.app/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });
  
      const data = await apiResponse.json();
      
      res.status(apiResponse.status).json(data);
    } else {
      res.status(405).end();
    }
  }
  