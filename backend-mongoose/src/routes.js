import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import FileController from './controllers/FileController';
import ProviderController from './controllers/ProviderController';

import authMiddleware from './middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
