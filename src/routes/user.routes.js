const express = require('express');

const router = express.Router();

router.get('/info', (req, res) => {
    res.json({
        msg: "Se optienen los usuarios"
    })
})

module.exports = router;