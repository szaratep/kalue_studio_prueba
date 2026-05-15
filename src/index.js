const express = require('express');

const app = express();

app.get('/health', (req, res) =>{
    res.json({
        msg: "hola mundo!"
    })
})

app.use('/users', require('./routes/user.routes.js'))

app.listen(3000, () =>{
    console.log('Server running on: http://localhost:3000');
})