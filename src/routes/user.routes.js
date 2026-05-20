import {Router} from 'express'
import { getUser, createUser, deleteUser, updateUser } from '../controllers/user.controllers.js';

const router = Router();

//Definicion de las rutas para los usuarios
router.get('/', getUser);
router.post ( '/', createUser);
router.delete ( '/', deleteUser);
router.patch ( '/', updateUser)

export default router;