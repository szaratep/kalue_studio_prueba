const {Router} = require('express');
const { getUser } = require('../controllers/user.controllers.js');

const router = Router();


//Definicion de las rutas para los usuarios
router.get('/', getUser);

module.exports = router;