import express from 'express';
import path from 'path';

import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json()); // Dizendo para o express que estamos utilizando JSON
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);
// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação (Lista, Item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=diego
// Route Params (Os dois pontos ":"): http://localhost:3333/users/1 (Identificar um recurso )
// Body (Corpo da requisição): http://localhost:3333/users




app.listen(3333);

// Driver nativo, Query builder, ORM

// Query Builder ou ORM   Trocar o banco de dados sem mudar nada na aplicação

