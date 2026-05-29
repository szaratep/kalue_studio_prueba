import {Router} from 'express'

const router = Router();

import { getUser, createUser, deleteUser, updateUser, getUserById } from '../controllers/user.controllers.js';


//Definicion de las rutas para los usuarios
router.get('/', getUser);
router.get('/:idUser', getUserById);
router.post ( '/', createUser);
router.delete ( '/:idUser', deleteUser);
router.patch ( '/:idUser', updateUser);

export default router;