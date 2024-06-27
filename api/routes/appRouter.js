const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'success',
        status: 200
    });
});

router.get('/all', (req, res) => {
    res.status(200).json({
        message: 'all users',
        status: 200
    });
});

module.exports = router;
