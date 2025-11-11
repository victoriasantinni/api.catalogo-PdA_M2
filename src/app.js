import express from "express";
import produtoRouter from './routes/produtoRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo à API do Catálogo!');
});

app.listen(PORT, () => {
    console.log('Servidor rodando na porta http://localhost:${PORT}');
});