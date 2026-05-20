const {Router} = require('express');
const { getUser, createUser, deleteUser, updateUser } = require('../controllers/user.controllers.js');

const router = Router();


//Definicion de las rutas para los usuarios
router.get('/', getUser);
router.post ( '/', createUser);
router.delete ( '/', deleteUser);
router.patch ( '/', updateUser)

module.exports = router;