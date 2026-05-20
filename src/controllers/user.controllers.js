function getUser  (req, res) {
    res.json({
        msg: "Listar todos los usuarios"
    })
}

module.exports ={
    getUser
};