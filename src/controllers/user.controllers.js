function getUser  (req, res) {
    res.json({
        msg: "Listar todos los usuarios"
    })
}

function updateUser ( req, res){
    res.json ({
        msg: "Actualizar usuarios"
    })
}

function deleteUser ( req, res){
    res.json ({
        msg: "Eliminar usuarios"
    })
}

function createUser ( req, res){
    res.json ({
        msg: "Crear usuarios"
    })
}

module.exports ={
    getUser,
    updateUser,
    deleteUser,
    createUser

};