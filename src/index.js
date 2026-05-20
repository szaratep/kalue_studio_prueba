const express = require('express');

const app = express();

//Endpoint Health
app.get ("/health", (req, res) => {
    res.json({
        msg: "Sitio Funcionando"
    })
})

//Endpoints agrupados por entidad

//user
app.use('/users', require('./routes/user.routes.js'))




//Lanzamiento del servidor
app.listen(3000, () =>{
    console.log('Server running on: http://localhost:3000');
})