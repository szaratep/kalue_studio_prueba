const {Router} = require('express');

const router = Router();


//Definicion de las rutas para los usuarios
router.get('/', (req, res) => {
    res.json({
        msg: "Se optienen los usuarios"
    })
})

module.exports = router;