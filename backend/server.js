const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;



// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
