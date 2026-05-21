import {Router} from 'express'

const router = Router();

import { getUser, createUser, deleteUser, updateUser } from '../controllers/user.controllers.js';


//Definicion de las rutas para los usuarios
router.get('/', getUser);
router.post ( '/', createUser);
router.delete ( '/', deleteUser);
router.patch ( '/', updateUser)

export default router;