const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        users: []
    });
});

router.get('/:userId', (req, res) => {
    res.status(200).json({
        status: 200,
        user: {
            id: req.params.userId,
            username: "aegislash",
            education: [],
            skills: [],
            projects: []
        }
    });
});

module.exports = router;
