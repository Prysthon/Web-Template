const express = require('express');

const app = express();

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Inicialização do servidor
const port = process.env.APP_PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});