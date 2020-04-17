import { Router } from 'express'
import multer from 'multer'
import multerConfig from './multer'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FileController from './app/controllers/FileController'
import ProviderController from './app/controllers/ProviderController'

import authMiddleware from './middlewares/auth'
import AppointmentController from './app/controllers/AppointmentController'

const routes = new Router()
const upload = multer(multerConfig)

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users', authMiddleware, UserController.update)
routes.delete('/users/:id', authMiddleware, UserController.destroy)

routes.post('/sessions', SessionController.store)
routes.post('/files', upload.single('file'), FileController.store)

routes.get('/providers', ProviderController.index)
// routes.post('/providers', ProviderController.store)
// routes.put('/providers', authMiddleware, ProviderController.update)
// routes.delete('/providers/:id', authMiddleware, ProviderController.destroy)

routes.post('/appointments', AppointmentController.store)

export default routes
