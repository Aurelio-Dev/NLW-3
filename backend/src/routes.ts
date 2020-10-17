import { Router } from 'express'
import multer from 'multer';

import uploadConfig from './config/upload';

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);
// console.log(request.query); Para ver/acessar os Query Params
// console.log(request.params); Para ver/acessar os Route Params
// console.log(request.body); Para ver/acessar os Body Params

// Rotas sempre em plural

// Métodos do Controller: index, show, create, update, delete
routes.get('/orphanages', OrphanagesController.index); // Listar orfanatos
routes.get('/orphanages/:id', OrphanagesController.show); // Detalhe do orfanato (Buscar um único orfanato) 
routes.post('/orphanages', upload.array('images'), OrphanagesController.create); // Criar orfanatos

export default routes;